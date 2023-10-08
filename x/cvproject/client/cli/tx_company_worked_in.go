package cli

import (
	"github.com/AlexS778/CVProject/x/cvproject/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

func CmdCreateCompanyWorkedIn() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-company-worked-in [uuid] [company-name] [timestamp-start] [timestamp-end] [comments]",
		Short: "Create a new CompanyWorkedIn",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexUuid := args[0]

			// Get value arguments
			argCompanyName := args[1]
			argTimestampStart := args[2]
			argTimestampEnd := args[3]
			argComments := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateCompanyWorkedIn(
				clientCtx.GetFromAddress().String(),
				indexUuid,
				argCompanyName,
				argTimestampStart,
				argTimestampEnd,
				argComments,
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

func CmdUpdateCompanyWorkedIn() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-company-worked-in [uuid] [company-name] [timestamp-start] [timestamp-end] [comments]",
		Short: "Update a CompanyWorkedIn",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexUuid := args[0]

			// Get value arguments
			argCompanyName := args[1]
			argTimestampStart := args[2]
			argTimestampEnd := args[3]
			argComments := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateCompanyWorkedIn(
				clientCtx.GetFromAddress().String(),
				indexUuid,
				argCompanyName,
				argTimestampStart,
				argTimestampEnd,
				argComments,
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

func CmdDeleteCompanyWorkedIn() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-company-worked-in [uuid]",
		Short: "Delete a CompanyWorkedIn",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexUuid := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteCompanyWorkedIn(
				clientCtx.GetFromAddress().String(),
				indexUuid,
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
