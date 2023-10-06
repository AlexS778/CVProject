package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateCV{}, "cvproject/CreateCV", nil)
	cdc.RegisterConcrete(&MsgUpdateCV{}, "cvproject/UpdateCV", nil)
	cdc.RegisterConcrete(&MsgConfirmCV{}, "cvproject/ConfirmCV", nil)
	cdc.RegisterConcrete(&MsgCreateCompanyWorkedIn{}, "cvproject/CreateCompanyWorkedIn", nil)
	cdc.RegisterConcrete(&MsgUpdateCompanyWorkedIn{}, "cvproject/UpdateCompanyWorkedIn", nil)
	cdc.RegisterConcrete(&MsgDeleteCompanyWorkedIn{}, "cvproject/DeleteCompanyWorkedIn", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCV{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUpdateCV{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgConfirmCV{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCompanyWorkedIn{},
		&MsgUpdateCompanyWorkedIn{},
		&MsgDeleteCompanyWorkedIn{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
