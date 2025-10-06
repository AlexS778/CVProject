package keeper

import (
	"context"

	"github.com/AlexS778/CVProject/x/cvproject/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) ConfirmCV(goCtx context.Context, msg *types.MsgConfirmCV) (*types.MsgConfirmCVResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_ = ctx
	//cv, err := k.GetCVByCosmosAdress(goCtx, &types.MsgGetCVByCosmosAdress{CosmosAddress: msg.CosmosAdress})
	//if err != nil {
	//	return &types.MsgConfirmCVResponse{}, errors.Wrap(types.ErrCVNotFound, msg.CosmosAdress)
	//}

	return &types.MsgConfirmCVResponse{}, nil
}
