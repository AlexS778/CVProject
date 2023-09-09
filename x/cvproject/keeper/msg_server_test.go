package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/AlexS778/CVProject/testutil/keeper"
	"github.com/AlexS778/CVProject/x/cvproject"
	"github.com/AlexS778/CVProject/x/cvproject/keeper"
	"github.com/AlexS778/CVProject/x/cvproject/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func setupMsgServerCreateCV(t testing.TB) (types.MsgServer, keeper.Keeper, context.Context) {
	k, ctx := keepertest.CvprojectKeeper(t)
	cvproject.InitGenesis(ctx, *k, *types.DefaultGenesis())
	return keeper.NewMsgServerImpl(*k), *k, sdk.WrapSDKContext(ctx)
}

func TestCreateCv(t *testing.T) {
	srv, k, context := setupMsgServerCreateCV(t)
	_, err := srv.CreateCV(context, &types.MsgCreateCV{
		Creator:   alice,
		Name:      "Steve Jobs",
		Summary:   "CEO",
		Companies: []string{"Apple", "Google", "Microsoft", "Amazon", "Facebook"},
	})
	require.Nil(t, err)
	res, err := k.GetCvByCosmosAddress(context, &types.QueryGetCvByCosmosAddressRequest{CosmosAddress: alice})
	if err != nil {
		t.Error(err)
	}
	require.EqualValues(t, res.CV.Name, "Steve Jobs")
}

func TestUpdateCv(t *testing.T) {
	srv, k, context := setupMsgServerCreateCV(t)
	_, err := srv.CreateCV(context, &types.MsgCreateCV{
		Creator:   alice,
		Name:      "Steve Jobs",
		Summary:   "CEO",
		Companies: []string{"Apple", "Google", "Microsoft", "Amazon", "Facebook"},
	})
	require.Nil(t, err)
	res, err := k.GetCvByCosmosAddress(context, &types.QueryGetCvByCosmosAddressRequest{CosmosAddress: alice})
	if err != nil {
		t.Error(err)
	}
	require.EqualValues(t, res.CV.Name, "Steve Jobs")
	_, err = srv.UpdateCV(context, &types.MsgUpdateCV{Creator: alice, CosmosAdress: alice, Name: "Bob"})
	require.Nil(t, err)
	res, err = k.GetCvByCosmosAddress(context, &types.QueryGetCvByCosmosAddressRequest{CosmosAddress: alice})
	if err != nil {
		t.Error(err)
	}
	require.EqualValues(t, res.CV.Name, "Bob")
}
