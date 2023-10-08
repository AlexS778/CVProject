package keeper

import (
	"context"
	"fmt"

	"github.com/AlexS778/CVProject/x/cvproject/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) UpdateCV(goCtx context.Context, msg *types.MsgUpdateCV) (*types.MsgUpdateCVResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// check if person who is sending a transaction is the same who is updating CV
	if msg.Creator != msg.CosmosAdress {
		return nil, sdkerrors.Wrap(types.ErrUpdateNotAllowed, fmt.Sprintf("your CosmosAddress: %s, CV you are trying to update CosmosAddress: %s", msg.Creator, msg.CosmosAdress))
	}

	cv, found := k.GetCV(ctx, msg.CosmosAdress)
	if !found {
		return &types.MsgUpdateCVResponse{}, sdkerrors.Wrap(types.ErrCVNotFound, fmt.Sprintf("Failed to update CV for this address: %s", msg.CosmosAdress))
	}

	if msg.Name != "" {
		cv.Name = msg.Name
	}
	if msg.Education != "" {
		cv.Education = msg.Education
	}
	if msg.Summary != "" {
		cv.Summary = msg.Summary
	}
	if msg.Skills != "" {
		cv.Skills = msg.Skills
	}
	if msg.Experience != "" {
		cv.Experience = msg.Experience
	}
	if len(msg.CompaniesUUID) != 0 {
		cv.CompaniesUUID = msg.CompaniesUUID
	}

	k.SetCV(ctx, cv)

	return &types.MsgUpdateCVResponse{}, nil
}
