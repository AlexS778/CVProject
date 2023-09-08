package keeper

import (
	"context"

	"github.com/AlexS778/CVProject/x/cvproject/types"
)

// TODO: message response should return cosmosAddress or should return nothinig at all
func (k msgServer) CreateCV(goCtx context.Context, msg *types.MsgCreateCV) (*types.MsgCreateCVResponse, error) {
	// k.SetCV(...)
	//ctx := sdk.UnwrapSDKContext(goCtx)

	cv := types.CV{
		Name:       msg.Name,
		Education:  msg.Education,
		Summary:    msg.Summary,
		Skills:     msg.Skills,
		Experience: msg.Experience,
		Creator:    msg.Creator,
	}

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

		cv.Companies = append(cv.Companies, &company)
	}

	return &types.MsgCreateCVResponse{}, nil
}
