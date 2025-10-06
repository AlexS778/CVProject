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

func createNCompanyWorkedIn(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.CompanyWorkedIn {
	items := make([]types.CompanyWorkedIn, n)
	for i := range items {
		items[i].Uuid = strconv.Itoa(i)

		keeper.SetCompanyWorkedIn(ctx, items[i])
	}
	return items
}

func TestCompanyWorkedInGet(t *testing.T) {
	keeper, ctx := keepertest.CvprojectKeeper(t)
	items := createNCompanyWorkedIn(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetCompanyWorkedIn(ctx,
			item.Uuid,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestCompanyWorkedInRemove(t *testing.T) {
	keeper, ctx := keepertest.CvprojectKeeper(t)
	items := createNCompanyWorkedIn(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCompanyWorkedIn(ctx,
			item.Uuid,
		)
		_, found := keeper.GetCompanyWorkedIn(ctx,
			item.Uuid,
		)
		require.False(t, found)
	}
}

func TestCompanyWorkedInGetAll(t *testing.T) {
	keeper, ctx := keepertest.CvprojectKeeper(t)
	items := createNCompanyWorkedIn(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCompanyWorkedIn(ctx)),
	)
}
