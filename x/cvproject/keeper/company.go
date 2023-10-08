package keeper

import (
	"github.com/AlexS778/CVProject/x/cvproject/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetCompany set a specific company in the store from its index
func (k Keeper) SetCompany(ctx sdk.Context, company types.Company) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CompanyKeyPrefix))
	b := k.cdc.MustMarshal(&company)
	store.Set(types.CompanyKey(
		company.UUID,
	), b)
}

// GetCompany returns a company from its index
func (k Keeper) GetCompany(
	ctx sdk.Context,
	uUID string,

) (val types.Company, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CompanyKeyPrefix))

	b := store.Get(types.CompanyKey(
		uUID,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCompany removes a company from the store
func (k Keeper) RemoveCompany(
	ctx sdk.Context,
	uUID string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CompanyKeyPrefix))
	store.Delete(types.CompanyKey(
		uUID,
	))
}

// GetAllCompany returns all company
func (k Keeper) GetAllCompany(ctx sdk.Context) (list []types.Company) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CompanyKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Company
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
