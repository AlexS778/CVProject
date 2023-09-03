package keeper_test

import (
	"strconv"
	"testing"

	keepertest "github.com/AlexS778/CVProject/testutil/keeper"
	"github.com/AlexS778/CVProject/testutil/nullify"
	"github.com/AlexS778/CVProject/x/cvproject/keeper"
	"github.com/AlexS778/CVProject/x/cvproject/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNCV(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.CV {
	items := make([]types.CV, n)
	for i := range items {
		items[i].Index = uint64(i)

		keeper.SetCV(ctx, items[i])
	}
	return items
}

func TestCVGet(t *testing.T) {
	keeper, ctx := keepertest.CvprojectKeeper(t)
	items := createNCV(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetCV(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestCVRemove(t *testing.T) {
	keeper, ctx := keepertest.CvprojectKeeper(t)
	items := createNCV(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCV(ctx,
			item.Index,
		)
		_, found := keeper.GetCV(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestCVGetAll(t *testing.T) {
	keeper, ctx := keepertest.CvprojectKeeper(t)
	items := createNCV(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCV(ctx)),
	)
}
