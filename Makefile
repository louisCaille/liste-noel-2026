PORT ?= 8000

.PHONY: help serve open

help: ## Affiche les commandes disponibles
	@grep -E '^[a-zA-Z_-]+:.*?## ' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-8s\033[0m %s\n", $$1, $$2}'

serve: ## Lance le site en local (port 8000 par défaut, PORT=xxxx pour changer)
	@echo "🎄 http://localhost:$(PORT)"
	@python3 -m http.server $(PORT)

open: ## Lance le site et l'ouvre dans le navigateur
	@(sleep 1 && open http://localhost:$(PORT)) &
	@$(MAKE) --no-print-directory serve
