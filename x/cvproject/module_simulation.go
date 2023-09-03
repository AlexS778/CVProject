package cvproject

import (
	"math/rand"

	"github.com/AlexS778/CVProject/testutil/sample"
	cvprojectsimulation "github.com/AlexS778/CVProject/x/cvproject/simulation"
	"github.com/AlexS778/CVProject/x/cvproject/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = cvprojectsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateCV = "op_weight_msg_create_cv"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateCV int = 100

	opWeightMsgUpdateCV = "op_weight_msg_update_cv"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateCV int = 100

	opWeightMsgGetCVByCosmosAdress = "op_weight_msg_get_cv_by_cosmos_adress"
	// TODO: Determine the simulation weight value
	defaultWeightMsgGetCVByCosmosAdress int = 100

	opWeightMsgConfirmCV = "op_weight_msg_confirm_cv"
	// TODO: Determine the simulation weight value
	defaultWeightMsgConfirmCV int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	cvprojectGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&cvprojectGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateCV int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateCV, &weightMsgCreateCV, nil,
		func(_ *rand.Rand) {
			weightMsgCreateCV = defaultWeightMsgCreateCV
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateCV,
		cvprojectsimulation.SimulateMsgCreateCV(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateCV int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateCV, &weightMsgUpdateCV, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateCV = defaultWeightMsgUpdateCV
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateCV,
		cvprojectsimulation.SimulateMsgUpdateCV(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgGetCVByCosmosAdress int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgGetCVByCosmosAdress, &weightMsgGetCVByCosmosAdress, nil,
		func(_ *rand.Rand) {
			weightMsgGetCVByCosmosAdress = defaultWeightMsgGetCVByCosmosAdress
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgGetCVByCosmosAdress,
		cvprojectsimulation.SimulateMsgGetCVByCosmosAdress(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgConfirmCV int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgConfirmCV, &weightMsgConfirmCV, nil,
		func(_ *rand.Rand) {
			weightMsgConfirmCV = defaultWeightMsgConfirmCV
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgConfirmCV,
		cvprojectsimulation.SimulateMsgConfirmCV(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
