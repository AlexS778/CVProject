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

	cv, err := k.GetCvByCosmosAddress(goCtx, &types.QueryGetCvByCosmosAddressRequest{CosmosAddress: msg.CosmosAdress})
	if err != nil {
		return &types.MsgUpdateCVResponse{}, sdkerrors.Wrap(types.ErrCVNotFound, fmt.Sprintf("Failed to update CV for this address: %s", msg.CosmosAdress))
	}

	if msg.Name != "" {
		cv.CV.Name = msg.Name
	}
	if msg.Education != "" {
		cv.CV.Education = msg.Education
	}
	if msg.Summary != "" {
		cv.CV.Summary = msg.Summary
	}
	if msg.Skills != "" {
		cv.CV.Skills = msg.Skills
	}
	if msg.Experience != "" {
		cv.CV.Experience = msg.Experience
	}

	counter := 0
	if len(msg.Companies) != 0 {
		for i := 0; i < len(msg.Companies); i += 5 {
			end := i + 5

			if end > len(msg.Companies) {
				end = len(msg.Companies)
			}

			chunk := msg.Companies[i:end]
			companyUUID := chunk[0]
			companyName := chunk[1]
			companyTimestampStart := chunk[2]
			companyTimestampEnd := chunk[3]
			companyComments := chunk[4]

			company := types.Company{
				Uuid:           companyUUID,
				Name:           companyName,
				TimestampStart: companyTimestampStart,
				TimestampEnd:   companyTimestampEnd,
				Comments:       companyComments,
			}

			cv.CV.Companies[counter] = &company
			counter++
		}
	}

	k.SetCV(ctx, *cv.CV)

	return &types.MsgUpdateCVResponse{}, nil
}
