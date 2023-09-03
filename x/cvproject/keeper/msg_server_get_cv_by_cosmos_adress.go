package keeper

import (
	"context"

	"github.com/AlexS778/CVProject/x/cvproject/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) GetCVByCosmosAdress(goCtx context.Context, msg *types.MsgGetCVByCosmosAdress) (*types.MsgGetCVByCosmosAdressResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	allCVs := k.GetAllCV(ctx)

	for _, cv := range allCVs {
		if msg.CosmosAddress == cv.CosmosAddress {
			return &types.MsgGetCVByCosmosAdressResponse{
					CvResponse: &cv,
				},
				nil
		}
	}

	return &types.MsgGetCVByCosmosAdressResponse{}, errors.Wrap(types.ErrCVNotFound, msg.CosmosAddress)
}
