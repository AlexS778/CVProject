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

func createNCompany(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Company {
	items := make([]types.Company, n)
	for i := range items {
		items[i].UUID = strconv.Itoa(i)

		keeper.SetCompany(ctx, items[i])
	}
	return items
}

func TestCompanyGet(t *testing.T) {
	keeper, ctx := keepertest.CvprojectKeeper(t)
	items := createNCompany(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetCompany(ctx,
			item.UUID,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestCompanyRemove(t *testing.T) {
	keeper, ctx := keepertest.CvprojectKeeper(t)
	items := createNCompany(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCompany(ctx,
			item.UUID,
		)
		_, found := keeper.GetCompany(ctx,
			item.UUID,
		)
		require.False(t, found)
	}
}

func TestCompanyGetAll(t *testing.T) {
	keeper, ctx := keepertest.CvprojectKeeper(t)
	items := createNCompany(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCompany(ctx)),
	)
}
