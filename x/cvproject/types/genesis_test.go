package types_test

import (
	"testing"

	"github.com/AlexS778/CVProject/testutil"
	"github.com/AlexS778/CVProject/x/cvproject/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{
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
				CompanyList: []types.Company{
					{
						UUID: "0",
					},
					{
						UUID: "1",
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated cV",
			genState: &types.GenesisState{
				CVList: []types.CV{
					{
						Creator: testutil.Alice,
					},
					{
						Creator: testutil.Alice,
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated companyWorkedIn",
			genState: &types.GenesisState{
				CompanyWorkedInList: []types.CompanyWorkedIn{
					{
						Uuid: "0",
					},
					{
						Uuid: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated company",
			genState: &types.GenesisState{
				CompanyList: []types.Company{
					{
						UUID: "0",
					},
					{
						UUID: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
