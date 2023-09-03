package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgConfirmCV = "confirm_cv"

var _ sdk.Msg = &MsgConfirmCV{}

func NewMsgConfirmCV(creator string, name string) *MsgConfirmCV {
	return &MsgConfirmCV{
		Creator: creator,
		Name:    name,
	}
}

func (msg *MsgConfirmCV) Route() string {
	return RouterKey
}

func (msg *MsgConfirmCV) Type() string {
	return TypeMsgConfirmCV
}

func (msg *MsgConfirmCV) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgConfirmCV) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgConfirmCV) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
