publish:
	vsce package
	vsce publish minor

login:
	echo "Step1: Login at https://azure.microsoft.com/en-gb/services/devops/"
	echo "Step2: Visit https://marketplace.visualstudio.com/manage/publishers/pgvscodeextentionpublisher"
	echo "Step3: Get token from https://dev.azure.com/vscodeextenstions/_usersSettings/tokens"
	echo "Use this token to login"
	vsce login pgvscodeextentionpublisher

show-urls:
	echo "Extention URL = https://marketplace.visualstudio.com/items?itemName=pgvscodeextentionpublisher.link-opener"
	echo "Hub URL = https://marketplace.visualstudio.com/manage/publishers/pgvscodeextentionpublisher/extensions/link-opener/hub"
