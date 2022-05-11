
AZURE_DEVOPS_URL = https://azure.microsoft.com/en-gb/services/devops/
MARKETPLACE_PUBLISHER_URL = https://marketplace.visualstudio.com/manage/publishers/pgvscodeextentionpublisher
TOKEN_GENERATOR_URL =  https://dev.azure.com/vscodeextenstions/_usersSettings/tokens
MARKETPLACE_EXTENSION_URL = https://marketplace.visualstudio.com/items?itemName=pgvscodeextentionpublisher.link-opener
HUB_URL = "https://marketplace.visualstudio.com/manage/publishers/pgvscodeextentionpublisher/extensions/link-opener/hub"

publish:
	vsce package
	vsce publish minor

login:
	@echo "Step1: Login at ${AZURE_DEVOPS_URL}"
	@echo "Step2: Visit ${MARKETPLACE_PUBLISHER_URL}"
	@echo "Step3: Get token from ${TOKEN_GENERATOR_URL}"
	@echo "Use this token to login"
	vsce login pgvscodeextentionpublisher

show-urls:
	@echo "Step1: Login at ${AZURE_DEVOPS_URL}"
	@echo "Step2: Visit ${MARKETPLACE_PUBLISHER_URL}"
	@echo "Step3: Get token from ${TOKEN_GENERATOR_URL}"
	@echo "Extention URL = ${MARKETPLACE_EXTENSION_URL}"
	@echo "Hub URL = ${HUB_URL}"

