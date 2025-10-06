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

func (k Keeper) CompanyWorkedInAll(c context.Context, req *types.QueryAllCompanyWorkedInRequest) (*types.QueryAllCompanyWorkedInResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var companyWorkedIns []types.CompanyWorkedIn
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	companyWorkedInStore := prefix.NewStore(store, types.KeyPrefix(types.CompanyWorkedInKeyPrefix))

	pageRes, err := query.Paginate(companyWorkedInStore, req.Pagination, func(key []byte, value []byte) error {
		var companyWorkedIn types.CompanyWorkedIn
		if err := k.cdc.Unmarshal(value, &companyWorkedIn); err != nil {
			return err
		}

		companyWorkedIns = append(companyWorkedIns, companyWorkedIn)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCompanyWorkedInResponse{CompanyWorkedIn: companyWorkedIns, Pagination: pageRes}, nil
}

func (k Keeper) CompanyWorkedIn(c context.Context, req *types.QueryGetCompanyWorkedInRequest) (*types.QueryGetCompanyWorkedInResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetCompanyWorkedIn(
		ctx,
		req.Uuid,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetCompanyWorkedInResponse{CompanyWorkedIn: val}, nil
}
