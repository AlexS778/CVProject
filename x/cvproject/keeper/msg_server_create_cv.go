package keeper

import (
	"context"
	"fmt"

	"github.com/AlexS778/CVProject/x/cvproject/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// TODO: message response should return cosmosAddress or should return nothinig at all
func (k msgServer) CreateCV(goCtx context.Context, msg *types.MsgCreateCV) (*types.MsgCreateCVResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// check if the companies exist
	for _, uuid := range msg.CompaniesUUID {
		_, found := k.GetCompanyWorkedIn(
			ctx,
			uuid,
		)
		if !found {
			return nil, fmt.Errorf("company not found for this company uuid: %s", uuid)
		}
	}

	cv := types.CV{
		Name:          msg.Name,
		Education:     msg.Education,
		Summary:       msg.Summary,
		Skills:        msg.Skills,
		Experience:    msg.Experience,
		CompaniesUUID: msg.CompaniesUUID,
		Creator:       msg.Creator,
	}

	k.SetCV(ctx, cv)

	return &types.MsgCreateCVResponse{}, nil
}
