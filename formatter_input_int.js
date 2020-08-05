// When having an integer being edited through an input field (and especially when the ABAP interface expects an integer
// and/or the actual ABAP data element is not char-like, submitting the changes will result in an XML parse error because
// the entity property will now be of type string instead of integer (because input fields output strings, not integers).
// To prevent this, 1) the property could be set to type string in the interface. If that is not possible, the input has
// to be 2) formatted as shown below.

/////////////////////////////////////
// Default UI5 Formatter
/////////////////////////////////////
// XML:
// <Input id="inputMaxS" value="{path: 'Seatsmax', type: 'sap.ui.model.type.Integer'}" textAlign="End" type="Number" submit="submit"></Input>

/////////////////////////////////////
// Custom Formatter
/////////////////////////////////////
// XML:
// <Input id="inputMaxS" value="{path: 'Seatsmax', formatter: '.formatInt'}" textAlign="End" type="Number" submit="submit"></Input>

formatInt: function (input) {
  var result = parseInt(input);
  return result;
}
