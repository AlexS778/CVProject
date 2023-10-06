package cvproject_test

import (
	"testing"

	"github.com/AlexS778/CVProject/testutil"
	keepertest "github.com/AlexS778/CVProject/testutil/keeper"
	"github.com/AlexS778/CVProject/testutil/nullify"
	"github.com/AlexS778/CVProject/x/cvproject"
	"github.com/AlexS778/CVProject/x/cvproject/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		CVList: []types.CV{
			{
				Creator: testutil.Alice,
			},
			{
				Creator: testutil.Bob,
			},
		},
		CompanyWorkedInList: []types.CompanyWorkedIn{
			{
				Uuid: "0",
			},
			{
				Uuid: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.CvprojectKeeper(t)
	cvproject.InitGenesis(ctx, *k, genesisState)
	got := cvproject.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.CVList, got.CVList)
	require.ElementsMatch(t, genesisState.CompanyWorkedInList, got.CompanyWorkedInList)
	// this line is used by starport scaffolding # genesis/test/assert
}
