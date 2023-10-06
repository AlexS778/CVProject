package keeper

import (
	"github.com/AlexS778/CVProject/x/cvproject/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetCompanyWorkedIn set a specific companyWorkedIn in the store from its index
func (k Keeper) SetCompanyWorkedIn(ctx sdk.Context, companyWorkedIn types.CompanyWorkedIn) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CompanyWorkedInKeyPrefix))
	b := k.cdc.MustMarshal(&companyWorkedIn)
	store.Set(types.CompanyWorkedInKey(
		companyWorkedIn.Uuid,
	), b)
}

// GetCompanyWorkedIn returns a companyWorkedIn from its index
func (k Keeper) GetCompanyWorkedIn(
	ctx sdk.Context,
	uuid string,

) (val types.CompanyWorkedIn, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CompanyWorkedInKeyPrefix))

	b := store.Get(types.CompanyWorkedInKey(
		uuid,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCompanyWorkedIn removes a companyWorkedIn from the store
func (k Keeper) RemoveCompanyWorkedIn(
	ctx sdk.Context,
	uuid string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CompanyWorkedInKeyPrefix))
	store.Delete(types.CompanyWorkedInKey(
		uuid,
	))
}

// GetAllCompanyWorkedIn returns all companyWorkedIn
func (k Keeper) GetAllCompanyWorkedIn(ctx sdk.Context) (list []types.CompanyWorkedIn) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CompanyWorkedInKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.CompanyWorkedIn
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
