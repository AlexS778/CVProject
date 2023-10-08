package keeper

import (
	"context"

	"github.com/AlexS778/CVProject/x/cvproject/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) CVAll(c context.Context, req *types.QueryAllCVRequest) (*types.QueryAllCVResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var cVs []types.CV
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	cVStore := prefix.NewStore(store, types.KeyPrefix(types.CVKeyPrefix))

	pageRes, err := query.Paginate(cVStore, req.Pagination, func(key []byte, value []byte) error {
		var cV types.CV
		if err := k.cdc.Unmarshal(value, &cV); err != nil {
			return err
		}

		cVs = append(cVs, cV)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCVResponse{CV: cVs, Pagination: pageRes}, nil
}

func (k Keeper) GetCvByCosmosAddress(c context.Context, req *types.QueryGetCvByCosmosAddressRequest) (*types.QueryGetCvByCosmosAddressResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetCV(
		ctx,
		req.CosmosAddress,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	cvForResp := types.CvForResponse{}
	cvForResp.Name = val.Name
	cvForResp.Skills = val.Skills
	cvForResp.Experience = val.Experience
	cvForResp.Education = val.Education
	cvForResp.Summary = val.Summary
	cvForResp.Creator = val.Creator

	for _, v := range val.CompaniesUUID {
		company, found := k.GetCompanyWorkedIn(ctx, v)
		if !found {
			return nil, status.Error(codes.Internal, "not found")
		}
		cvForResp.Companies = append(cvForResp.Companies, &company)

	}

	return &types.QueryGetCvByCosmosAddressResponse{CV: &cvForResp}, nil
}
