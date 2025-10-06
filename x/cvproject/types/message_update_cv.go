package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgUpdateCV = "update_cv"

var _ sdk.Msg = &MsgUpdateCV{}

func NewMsgUpdateCV(creator string, name string, education string, summary string, skills string, experience string, companies []string) *MsgUpdateCV {
	return &MsgUpdateCV{
		Creator:       creator,
		Name:          name,
		Education:     education,
		Summary:       summary,
		Skills:        skills,
		Experience:    experience,
		CompaniesUUID: companies,
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
