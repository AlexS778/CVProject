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
	opWeightMsgCreateCV = "op_weight_msg_cv"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateCV int = 100

	opWeightMsgUpdateCV = "op_weight_msg_cv"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateCV int = 100

	opWeightMsgDeleteCV = "op_weight_msg_cv"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteCV int = 100

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
		CVList: []types.CV{
			{
				Creator: sample.AccAddress(),
				Index:   "0",
			},
			{
				Creator: sample.AccAddress(),
				Index:   "1",
			},
		},
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

	var weightMsgDeleteCV int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteCV, &weightMsgDeleteCV, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteCV = defaultWeightMsgDeleteCV
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteCV,
		cvprojectsimulation.SimulateMsgDeleteCV(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
