package keeper

import (
	"github.com/AlexS778/CVProject/x/cvproject/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetCV set a specific cV in the store from its index
func (k Keeper) SetCV(ctx sdk.Context, cV types.CV) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CVKeyPrefix))
	b := k.cdc.MustMarshal(&cV)
	store.Set(types.CVKey(
		cV.Index,
	), b)
}

// GetCV returns a cV from its index
func (k Keeper) GetCV(
	ctx sdk.Context,
	index uint64,

) (val types.CV, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CVKeyPrefix))

	b := store.Get(types.CVKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCV removes a cV from the store
func (k Keeper) RemoveCV(
	ctx sdk.Context,
	index uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CVKeyPrefix))
	store.Delete(types.CVKey(
		index,
	))
}

// GetAllCV returns all cV
func (k Keeper) GetAllCV(ctx sdk.Context) (list []types.CV) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CVKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.CV
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
