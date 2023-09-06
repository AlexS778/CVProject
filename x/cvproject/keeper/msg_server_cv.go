package keeper

import (
	"context"

	"github.com/AlexS778/CVProject/x/cvproject/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateCV(goCtx context.Context, msg *types.MsgCreateCV) (*types.MsgCreateCVResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetCV(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var cV = types.CV{
		Creator:    msg.Creator,
		Index:      msg.Index,
		Name:       msg.Name,
		Education:  msg.Education,
		Summary:    msg.Summary,
		Skills:     msg.Skills,
		Experience: msg.Experience,
		Companies:  msg.Companies,
	}

	k.SetCV(
		ctx,
		cV,
	)
	return &types.MsgCreateCVResponse{}, nil
}

func (k msgServer) UpdateCV(goCtx context.Context, msg *types.MsgUpdateCV) (*types.MsgUpdateCVResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetCV(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var cV = types.CV{
		Creator:    msg.Creator,
		Index:      msg.Index,
		Name:       msg.Name,
		Education:  msg.Education,
		Summary:    msg.Summary,
		Skills:     msg.Skills,
		Experience: msg.Experience,
		Companies:  msg.Companies,
	}

	k.SetCV(ctx, cV)

	return &types.MsgUpdateCVResponse{}, nil
}

func (k msgServer) DeleteCV(goCtx context.Context, msg *types.MsgDeleteCV) (*types.MsgDeleteCVResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetCV(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCV(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteCVResponse{}, nil
}
