package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateCompany = "create_company"
	TypeMsgUpdateCompany = "update_company"
	TypeMsgDeleteCompany = "delete_company"
)

var _ sdk.Msg = &MsgCreateCompany{}

func NewMsgCreateCompany(
	creator string,
	uUID string,
	name string,

) *MsgCreateCompany {
	return &MsgCreateCompany{
		Creator: creator,
		UUID:    uUID,
		Name:    name,
	}
}

func (msg *MsgCreateCompany) Route() string {
	return RouterKey
}

func (msg *MsgCreateCompany) Type() string {
	return TypeMsgCreateCompany
}

func (msg *MsgCreateCompany) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCompany) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCompany) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCompany{}

func NewMsgUpdateCompany(
	creator string,
	uUID string,
	name string,

) *MsgUpdateCompany {
	return &MsgUpdateCompany{
		Creator: creator,
		UUID:    uUID,
		Name:    name,
	}
}

func (msg *MsgUpdateCompany) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCompany) Type() string {
	return TypeMsgUpdateCompany
}

func (msg *MsgUpdateCompany) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCompany) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCompany) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteCompany{}

func NewMsgDeleteCompany(
	creator string,
	uUID string,

) *MsgDeleteCompany {
	return &MsgDeleteCompany{
		Creator: creator,
		UUID:    uUID,
	}
}
func (msg *MsgDeleteCompany) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCompany) Type() string {
	return TypeMsgDeleteCompany
}

func (msg *MsgDeleteCompany) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCompany) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCompany) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
