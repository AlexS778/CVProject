package types

import (
	"testing"

	"github.com/AlexS778/CVProject/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateCompanyWorkedIn_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateCompanyWorkedIn
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateCompanyWorkedIn{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateCompanyWorkedIn{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateCompanyWorkedIn_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateCompanyWorkedIn
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateCompanyWorkedIn{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateCompanyWorkedIn{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteCompanyWorkedIn_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteCompanyWorkedIn
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteCompanyWorkedIn{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteCompanyWorkedIn{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
