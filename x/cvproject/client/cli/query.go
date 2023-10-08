package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/AlexS778/CVProject/x/cvproject/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group cvproject queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdListCV())
	cmd.AddCommand(CmdGetCvByCosmosAddress())

	cmd.AddCommand(CmdListCompanyWorkedIn())
	cmd.AddCommand(CmdShowCompanyWorkedIn())
	cmd.AddCommand(CmdListCompany())
	cmd.AddCommand(CmdShowCompany())
	// this line is used by starport scaffolding # 1

	return cmd
}
