package keeper

import (
	"context"

	"github.com/AlexS778/CVProject/x/cvproject/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateCompany(goCtx context.Context, msg *types.MsgCreateCompany) (*types.MsgCreateCompanyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetCompany(
		ctx,
		msg.UUID,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var company = types.Company{
		Creator: msg.Creator,
		UUID:    msg.UUID,
		Name:    msg.Name,
	}

	k.SetCompany(
		ctx,
		company,
	)
	return &types.MsgCreateCompanyResponse{}, nil
}

func (k msgServer) UpdateCompany(goCtx context.Context, msg *types.MsgUpdateCompany) (*types.MsgUpdateCompanyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetCompany(
		ctx,
		msg.UUID,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var company = types.Company{
		Creator: msg.Creator,
		UUID:    msg.UUID,
		Name:    msg.Name,
	}

	k.SetCompany(ctx, company)

	return &types.MsgUpdateCompanyResponse{}, nil
}

func (k msgServer) DeleteCompany(goCtx context.Context, msg *types.MsgDeleteCompany) (*types.MsgDeleteCompanyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetCompany(
		ctx,
		msg.UUID,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCompany(
		ctx,
		msg.UUID,
	)

	return &types.MsgDeleteCompanyResponse{}, nil
}
