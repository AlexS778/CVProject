package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateCompanyWorkedIn = "create_company_worked_in"
	TypeMsgUpdateCompanyWorkedIn = "update_company_worked_in"
	TypeMsgDeleteCompanyWorkedIn = "delete_company_worked_in"
)

var _ sdk.Msg = &MsgCreateCompanyWorkedIn{}

func NewMsgCreateCompanyWorkedIn(
	creator string,
	uuid string,
	companyName string,
	timestampStart string,
	timestampEnd string,
	comments string,

) *MsgCreateCompanyWorkedIn {
	return &MsgCreateCompanyWorkedIn{
		Creator:        creator,
		Uuid:           uuid,
		CompanyName:    companyName,
		TimestampStart: timestampStart,
		TimestampEnd:   timestampEnd,
		Comments:       comments,
	}
}

func (msg *MsgCreateCompanyWorkedIn) Route() string {
	return RouterKey
}

func (msg *MsgCreateCompanyWorkedIn) Type() string {
	return TypeMsgCreateCompanyWorkedIn
}

func (msg *MsgCreateCompanyWorkedIn) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCompanyWorkedIn) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCompanyWorkedIn) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCompanyWorkedIn{}

func NewMsgUpdateCompanyWorkedIn(
	creator string,
	uuid string,
	companyName string,
	timestampStart string,
	timestampEnd string,
	comments string,

) *MsgUpdateCompanyWorkedIn {
	return &MsgUpdateCompanyWorkedIn{
		Creator:        creator,
		Uuid:           uuid,
		CompanyName:    companyName,
		TimestampStart: timestampStart,
		TimestampEnd:   timestampEnd,
		Comments:       comments,
	}
}

func (msg *MsgUpdateCompanyWorkedIn) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCompanyWorkedIn) Type() string {
	return TypeMsgUpdateCompanyWorkedIn
}

func (msg *MsgUpdateCompanyWorkedIn) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCompanyWorkedIn) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCompanyWorkedIn) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteCompanyWorkedIn{}

func NewMsgDeleteCompanyWorkedIn(
	creator string,
	uuid string,

) *MsgDeleteCompanyWorkedIn {
	return &MsgDeleteCompanyWorkedIn{
		Creator: creator,
		Uuid:    uuid,
	}
}
func (msg *MsgDeleteCompanyWorkedIn) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCompanyWorkedIn) Type() string {
	return TypeMsgDeleteCompanyWorkedIn
}

func (msg *MsgDeleteCompanyWorkedIn) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCompanyWorkedIn) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCompanyWorkedIn) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
