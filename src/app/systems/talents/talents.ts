import { TalentConfig } from 'app/systems/talents/config'
import { DruidBalanceTree } from 'app/systems/talents/talentTrees/druidBalance'
import { BasicTalentTreeViewModel } from 'lib/STK/UI/STK/ViewModels/BasicTalentTreeViewModel'
import { BasicTalentViewModel } from 'lib/STK/UI/STK/ViewModels/BasicTalentViewModel'
import { GenerateBasicTalentTreeView } from 'lib/STK/UI/STK/Views/BasicTalentTreeView'
import { GenerateBasicTalentView } from 'lib/STK/UI/STK/Views/BasicTalentView'
import { Frame, MapPlayer, Unit } from 'lib/w3ts'

export function Initialize () {
	// const config = new TalentConfig()

	// const treeUi = GenerateBasicTalentTreeView(config.talentTreeView, Frame.fromOrigin(ORIGIN_FRAME_GAME_UI, 0))
	// const treeVm = new BasicTalentTreeViewModel(config.talentTreeViewModel, MapPlayer.fromIndex(0), treeUi,
	// 	(i) => new BasicTalentViewModel(config.talentViewModel, GenerateBasicTalentView(config.talentView, treeUi.talentTreeContainer, i.toString())))

	// const tree = new DruidBalanceTree(Unit.e003_0014)

	// treeVm.SetTree(tree)
	// treeVm.Show()
}
