package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "github.com/AlexS778/CVProject/testutil/keeper"
	"github.com/AlexS778/CVProject/x/cvproject/keeper"
	"github.com/AlexS778/CVProject/x/cvproject/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestCompanyMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.CvprojectKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateCompany{Creator: creator,
			UUID: strconv.Itoa(i),
		}
		_, err := srv.CreateCompany(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetCompany(ctx,
			expected.UUID,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestCompanyMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateCompany
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateCompany{Creator: creator,
				UUID: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateCompany{Creator: "B",
				UUID: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateCompany{Creator: creator,
				UUID: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.CvprojectKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateCompany{Creator: creator,
				UUID: strconv.Itoa(0),
			}
			_, err := srv.CreateCompany(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateCompany(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetCompany(ctx,
					expected.UUID,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestCompanyMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteCompany
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteCompany{Creator: creator,
				UUID: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteCompany{Creator: "B",
				UUID: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteCompany{Creator: creator,
				UUID: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.CvprojectKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateCompany(wctx, &types.MsgCreateCompany{Creator: creator,
				UUID: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteCompany(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetCompany(ctx,
					tc.request.UUID,
				)
				require.False(t, found)
			}
		})
	}
}
