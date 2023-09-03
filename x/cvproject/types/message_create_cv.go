package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateCV = "create_cv"

var _ sdk.Msg = &MsgCreateCV{}

func NewMsgCreateCV(creator string, name string, education string, summary string, skills string, experience string, companies []string) *MsgCreateCV {
	return &MsgCreateCV{
		Creator:    creator,
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
	if len(msg.Companies)%5 != 0 {
		return sdkerrors.Wrapf(ErrNotEnoughLen, "there are only %d elements in companies array, should be divisible by 5", len(msg.Companies))
	}
	return nil
}
