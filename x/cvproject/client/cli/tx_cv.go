package cli

import (
	"github.com/AlexS778/CVProject/x/cvproject/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"strings"
)

func CmdCreateCV() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-cv [index] [name] [education] [summary] [skills] [experience] [companies]",
		Short: "Create a new CV",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argName := args[1]
			argEducation := args[2]
			argSummary := args[3]
			argSkills := args[4]
			argExperience := args[5]
			argCompanies := strings.Split(args[6], listSeparator)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateCV(
				clientCtx.GetFromAddress().String(),
				indexIndex,
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

func CmdUpdateCV() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-cv [index] [name] [education] [summary] [skills] [experience] [companies]",
		Short: "Update a CV",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argName := args[1]
			argEducation := args[2]
			argSummary := args[3]
			argSkills := args[4]
			argExperience := args[5]
			argCompanies := strings.Split(args[6], listSeparator)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateCV(
				clientCtx.GetFromAddress().String(),
				indexIndex,
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

func CmdDeleteCV() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-cv [index]",
		Short: "Delete a CV",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexIndex := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteCV(
				clientCtx.GetFromAddress().String(),
				indexIndex,
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
