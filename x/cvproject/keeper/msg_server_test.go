package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/AlexS778/CVProject/testutil/keeper"
	"github.com/AlexS778/CVProject/x/cvproject/keeper"
	"github.com/AlexS778/CVProject/x/cvproject/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.CvprojectKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
