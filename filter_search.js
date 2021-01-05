		/* XML:
    <List id="matnrValueHelpList" items="{/HEADERCollection}" mode="SingleSelectMaster" selectionChange="onItemSelect">
				<headerToolbar>
					<OverflowToolbar>
						<Label labelFor="searchFieldMatnr" text="{i18n>matnr}"/>
						<SearchField id="searchFieldMatnr" liveChange=".onSearch($event, 'MATNR')" width="200px" showSearchButton="false"
							placeholder="{i18n>number}"/>
						<SearchField id="searchFieldText" liveChange=".onSearch($event, 'KTEXT')" width="400px" showSearchButton="false" placeholder="{i18n>ktext}"/>
					</OverflowToolbar>
				</headerToolbar>
				<StandardListItem title="{MATNR}" description="{KTEXT}" icon="{ICON}" iconDensityAware="false" iconInset="true" type="Active"/>
			</List>
    */
    
    onSearch: function (event, fieldname) {
			var manager = new Manager();
			var filters = [];
			var input = event.getSource().getValue();
			if (!manager.isNullOrWhitespace(input)) {
				var filter = new Filter(fieldname, FilterOperator.Contains, input);
				filters.push(filter);
			}
			var binding = event.getSource().getParent().getParent().getBinding("items");
			binding.filter([filter]);

		},
