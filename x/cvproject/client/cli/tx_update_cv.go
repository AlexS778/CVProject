package cli

import (
	"strconv"

	"github.com/AlexS778/CVProject/x/cvproject/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"strings"
)

var _ = strconv.Itoa(0)

func CmdUpdateCV() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-cv [name] [education] [summary] [skills] [experience] [companies]",
		Short: "Broadcast message updateCV",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argName := args[0]
			argEducation := args[1]
			argSummary := args[2]
			argSkills := args[3]
			argExperience := args[4]
			argCompanies := strings.Split(args[5], listSeparator)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateCV(
				clientCtx.GetFromAddress().String(),
				argName,
				argEducation,
				argSummary,
				argSkills,
				argExperience,
				argCompanies,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
