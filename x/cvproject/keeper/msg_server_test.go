package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/AlexS778/CVProject/testutil/keeper"
	"github.com/AlexS778/CVProject/x/cvproject"
	"github.com/AlexS778/CVProject/x/cvproject/keeper"
	"github.com/AlexS778/CVProject/x/cvproject/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func setupMsgServerCreateCV(t testing.TB) (types.MsgServer, keeper.Keeper, context.Context) {
	k, ctx := keepertest.CvprojectKeeper(t)
	cvproject.InitGenesis(ctx, *k, *types.DefaultGenesis())
	return keeper.NewMsgServerImpl(*k), *k, sdk.WrapSDKContext(ctx)
}

func TestCreateCv(t *testing.T) {
	srv, _, context := setupMsgServerCreateCV(t)
	crateResponse, err := srv.CreateCV(context, &types.MsgCreateCV{
		Creator:   alice,
		Name:      "Steve Jobs",
		Summary:   "CEO",
		Companies: []string{"Apple", "Google", "Microsoft", "Amazon", "Facebook"},
	})
	require.Nil(t, err)
	require.EqualValues(t, types.MsgCreateCVResponse{CvIndex: 1}, *crateResponse)
}

func TestUpdateCv(t *testing.T) {
	srv, _, context := setupMsgServerCreateCV(t)
	_, err := srv.CreateCV(context, &types.MsgCreateCV{
		Creator:   alice,
		Name:      "Steve Jobs",
		Summary:   "CEO",
		Companies: []string{"Apple", "Google", "Microsoft", "Amazon", "Facebook"},
	})
	require.Nil(t, err)
	_, err = srv.UpdateCV(context, &types.MsgUpdateCV{
		Creator:    alice,
		Name:       "Craig Federighi",
		Education:  "MIT",
		Summary:    "CTO",
		Skills:     "Problem solving",
		Experience: "NeXT",
		Companies:  []string{"AribaCompanyUUID", "Ariba", "12.12.2009", "12.12.2012", "Craig is a hardworking person!"},
	})
	require.Nil(t, err)
	cv, err := srv.GetCVByCosmosAdress(context, &types.MsgGetCVByCosmosAdress{
		CosmosAddress: alice,
	})
	cvResponse := cv.CvResponse
	require.Nil(t, err)
	require.Equal(t, &types.MsgGetCVByCosmosAdressResponse{
		CvResponse: &types.CV{
			Index:         1,
			CosmosAddress: alice,
			Name:          "Craig Federighi",
			Education:     "MIT",
			Summary:       "CTO",
			Skills:        "Problem solving",
			Experience:    "NeXT",
			Companies: []*types.Company{
				{
					Uuid:           "AribaCompanyUUID",
					Name:           "Ariba",
					TimestampStart: "12.12.2009",
					TimestampEnd:   "12.12.2012",
					Comments:       "Craig is a hardworking person!",
				},
			},
		}}, &types.MsgGetCVByCosmosAdressResponse{CvResponse: cvResponse})
}

func TestGetCVByCosmosAddress(t *testing.T) {
	srv, _, context := setupMsgServerCreateCV(t)
	createResponse, err := srv.CreateCV(context, &types.MsgCreateCV{
		Creator:   alice,
		Name:      "Steve Jobs",
		Summary:   "CEO",
		Companies: []string{"apple", "google", "microsoft", "amazon", "facebook"},
	})
	_ = createResponse
	require.Nil(t, err)
	getResponse, err := srv.GetCVByCosmosAdress(context, &types.MsgGetCVByCosmosAdress{CosmosAddress: alice})
	require.Nil(t, err)
	require.Equal(t, types.MsgGetCVByCosmosAdressResponse{CvResponse: &types.CV{
		Index:         1,
		CosmosAddress: alice,
		Name:          "Steve Jobs",
		Summary:       "CEO",
		Companies: []*types.Company{
			{
				Uuid:           "apple",
				Name:           "google",
				TimestampStart: "microsoft",
				TimestampEnd:   "amazon",
				Comments:       "facebook",
			},
		},
	}}, *getResponse)
}
