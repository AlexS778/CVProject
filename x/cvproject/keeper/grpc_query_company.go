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

func (k Keeper) CompanyAll(c context.Context, req *types.QueryAllCompanyRequest) (*types.QueryAllCompanyResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var companys []types.Company
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	companyStore := prefix.NewStore(store, types.KeyPrefix(types.CompanyKeyPrefix))

	pageRes, err := query.Paginate(companyStore, req.Pagination, func(key []byte, value []byte) error {
		var company types.Company
		if err := k.cdc.Unmarshal(value, &company); err != nil {
			return err
		}

		companys = append(companys, company)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCompanyResponse{Company: companys, Pagination: pageRes}, nil
}

func (k Keeper) Company(c context.Context, req *types.QueryGetCompanyRequest) (*types.QueryGetCompanyResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetCompany(
		ctx,
		req.UUID,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetCompanyResponse{Company: val}, nil
}
