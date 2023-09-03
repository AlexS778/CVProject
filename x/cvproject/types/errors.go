package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/cvproject module sentinel errors
var (
	ErrNotEnoughLen = sdkerrors.Register(ModuleName, 1100, "Not enough elements in the company array")
	ErrCVNotFound   = sdkerrors.Register(ModuleName, 1101, "CV wasn't found by that cosmos address")
)
