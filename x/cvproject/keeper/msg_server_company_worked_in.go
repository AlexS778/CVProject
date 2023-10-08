package keeper

import (
	"context"

	"github.com/AlexS778/CVProject/x/cvproject/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateCompanyWorkedIn(goCtx context.Context, msg *types.MsgCreateCompanyWorkedIn) (*types.MsgCreateCompanyWorkedInResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetCompanyWorkedIn(
		ctx,
		msg.Uuid,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	// check if company exist
	_, found := k.GetCompany(ctx, msg.CompanyID)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "found no company")
	}

	var companyWorkedIn = types.CompanyWorkedIn{
		Creator:        msg.Creator,
		Uuid:           msg.Uuid,
		CompanyName:    msg.CompanyName,
		CompanyID:      msg.CompanyID,
		TimestampStart: msg.TimestampStart,
		TimestampEnd:   msg.TimestampEnd,
		Comments:       msg.Comments,
	}

	k.SetCompanyWorkedIn(
		ctx,
		companyWorkedIn,
	)
	return &types.MsgCreateCompanyWorkedInResponse{}, nil
}

func (k msgServer) UpdateCompanyWorkedIn(goCtx context.Context, msg *types.MsgUpdateCompanyWorkedIn) (*types.MsgUpdateCompanyWorkedInResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetCompanyWorkedIn(
		ctx,
		msg.Uuid,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var companyWorkedIn = types.CompanyWorkedIn{
		Creator:        msg.Creator,
		Uuid:           msg.Uuid,
		CompanyName:    msg.CompanyName,
		TimestampStart: msg.TimestampStart,
		TimestampEnd:   msg.TimestampEnd,
		Comments:       msg.Comments,
	}

	k.SetCompanyWorkedIn(ctx, companyWorkedIn)

	return &types.MsgUpdateCompanyWorkedInResponse{}, nil
}

func (k msgServer) DeleteCompanyWorkedIn(goCtx context.Context, msg *types.MsgDeleteCompanyWorkedIn) (*types.MsgDeleteCompanyWorkedInResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetCompanyWorkedIn(
		ctx,
		msg.Uuid,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCompanyWorkedIn(
		ctx,
		msg.Uuid,
	)

	return &types.MsgDeleteCompanyWorkedInResponse{}, nil
}
