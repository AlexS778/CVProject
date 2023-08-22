package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateCV = "create_cv"
	TypeMsgUpdateCV = "update_cv"
	TypeMsgDeleteCV = "delete_cv"
)

var _ sdk.Msg = &MsgCreateCV{}

func NewMsgCreateCV(
	creator string,
	index string,
	name string,
	education string,
	summary string,
	skills string,
	experience string,
	companies []string,

) *MsgCreateCV {
	return &MsgCreateCV{
		Creator:    creator,
		Index:      index,
		Name:       name,
		Education:  education,
		Summary:    summary,
		Skills:     skills,
		Experience: experience,
		Companies:  companies,
	}
}

func (msg *MsgCreateCV) Route() string {
	return RouterKey
}

func (msg *MsgCreateCV) Type() string {
	return TypeMsgCreateCV
}

func (msg *MsgCreateCV) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCV) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCV) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCV{}

func NewMsgUpdateCV(
	creator string,
	index string,
	name string,
	education string,
	summary string,
	skills string,
	experience string,
	companies []string,

) *MsgUpdateCV {
	return &MsgUpdateCV{
		Creator:    creator,
		Index:      index,
		Name:       name,
		Education:  education,
		Summary:    summary,
		Skills:     skills,
		Experience: experience,
		Companies:  companies,
	}
}

func (msg *MsgUpdateCV) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCV) Type() string {
	return TypeMsgUpdateCV
}

func (msg *MsgUpdateCV) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCV) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCV) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteCV{}

func NewMsgDeleteCV(
	creator string,
	index string,

) *MsgDeleteCV {
	return &MsgDeleteCV{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteCV) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCV) Type() string {
	return TypeMsgDeleteCV
}

func (msg *MsgDeleteCV) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCV) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCV) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
