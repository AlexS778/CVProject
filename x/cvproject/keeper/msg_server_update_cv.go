package keeper

import (
	"context"

	"github.com/AlexS778/CVProject/x/cvproject/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) UpdateCV(goCtx context.Context, msg *types.MsgUpdateCV) (*types.MsgUpdateCVResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	systemInfo, found := k.GetSystemInfo(ctx)
	if !found {
		panic("SystemInfo not found")
	}

	cv, err := k.GetCVByCosmosAdress(goCtx, &types.MsgGetCVByCosmosAdress{CosmosAddress: msg.Creator})
	if err != nil {
		return &types.MsgUpdateCVResponse{}, errors.Wrap(types.ErrCVNotFound, msg.Creator)
	}

	if msg.Name != "" {
		cv.CvResponse.Name = msg.Name
	}
	if msg.Education != "" {
		cv.CvResponse.Education = msg.Education
	}
	if msg.Summary != "" {
		cv.CvResponse.Summary = msg.Summary
	}
	if msg.Skills != "" {
		cv.CvResponse.Skills = msg.Skills
	}
	if msg.Experience != "" {
		cv.CvResponse.Experience = msg.Experience
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

			cv.CvResponse.Companies[counter] = &company
			counter++
		}
	}

	k.SetCV(ctx, *cv.CvResponse)
	systemInfo.NextId++
	k.SetSystemInfo(ctx, systemInfo)

	return &types.MsgUpdateCVResponse{}, nil
}
