package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgGetCVByCosmosAdress = "get_cv_by_cosmos_adress"

var _ sdk.Msg = &MsgGetCVByCosmosAdress{}

func NewMsgGetCVByCosmosAdress(creator string, cosmosAddress string) *MsgGetCVByCosmosAdress {
	return &MsgGetCVByCosmosAdress{
		Creator:       creator,
		CosmosAddress: cosmosAddress,
	}
}

func (msg *MsgGetCVByCosmosAdress) Route() string {
	return RouterKey
}

func (msg *MsgGetCVByCosmosAdress) Type() string {
	return TypeMsgGetCVByCosmosAdress
}

func (msg *MsgGetCVByCosmosAdress) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgGetCVByCosmosAdress) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgGetCVByCosmosAdress) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
