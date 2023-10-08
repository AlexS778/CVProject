package keeper_test

import (
	"fmt"
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

func TestCompanyWorkedInMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.CvprojectKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		currUUID := fmt.Sprintf("Company" + strconv.Itoa(i))
		_, err := srv.CreateCompany(wctx, &types.MsgCreateCompany{Creator: creator,
			UUID: currUUID,
		})
		require.NoError(t, err)
		r, _ := k.GetCompany(ctx, currUUID)
		_ = r
		wctx = sdk.WrapSDKContext(ctx)
		expected := &types.MsgCreateCompanyWorkedIn{Creator: creator,
			Uuid:      strconv.Itoa(i),
			CompanyID: currUUID,
		}
		_, err = srv.CreateCompanyWorkedIn(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetCompanyWorkedIn(ctx,
			expected.Uuid,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestCompanyWorkedInMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateCompanyWorkedIn
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateCompanyWorkedIn{Creator: creator,
				Uuid: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateCompanyWorkedIn{Creator: "B",
				Uuid: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateCompanyWorkedIn{Creator: creator,
				Uuid: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.CvprojectKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateCompanyWorkedIn{Creator: creator,
				Uuid: strconv.Itoa(0),
			}
			_, err := srv.CreateCompanyWorkedIn(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateCompanyWorkedIn(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetCompanyWorkedIn(ctx,
					expected.Uuid,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestCompanyWorkedInMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteCompanyWorkedIn
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteCompanyWorkedIn{Creator: creator,
				Uuid: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteCompanyWorkedIn{Creator: "B",
				Uuid: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteCompanyWorkedIn{Creator: creator,
				Uuid: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.CvprojectKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateCompanyWorkedIn(wctx, &types.MsgCreateCompanyWorkedIn{Creator: creator,
				Uuid: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteCompanyWorkedIn(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetCompanyWorkedIn(ctx,
					tc.request.Uuid,
				)
				require.False(t, found)
			}
		})
	}
}
