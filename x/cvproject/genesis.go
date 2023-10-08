package cvproject

import (
	"github.com/AlexS778/CVProject/x/cvproject/keeper"
	"github.com/AlexS778/CVProject/x/cvproject/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the cV
	for _, elem := range genState.CVList {
		k.SetCV(ctx, elem)
	}
	// Set all the companyWorkedIn
	for _, elem := range genState.CompanyWorkedInList {
		k.SetCompanyWorkedIn(ctx, elem)
	}
	// Set all the company
	for _, elem := range genState.CompanyList {
		k.SetCompany(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.CVList = k.GetAllCV(ctx)
	genesis.CompanyWorkedInList = k.GetAllCompanyWorkedIn(ctx)
	genesis.CompanyList = k.GetAllCompany(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
