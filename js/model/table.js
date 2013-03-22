

// Table generator
function gridBody(attr) {

    // empty the plate table every time
    $('#plate').empty();

    // if dims are less than 15
    if ($('#Ydimension').val() <= 15 && $('#Xdimension').val() <= 15) {
        $("#PlateSection").show();
        $('#plate').append('<tbody id="PlateBody"></tbody>');
        // generate columns
          for (var i = 0; i < ($('#Ydimension').val()); i++) {
            $('#PlateBody').append('<tr class="grid-col" y="'+(i+1)+'"></tr>');
          };

        gridHeader(attr);
        rowHeader(attr);
    }
    
};

// Table headers generation
function gridHeader(attr) {

    // switch board for each type of option
    switch (attr) {

        case "1A-config":
            $('#plate').prepend('<thead class="col-head"></thead>');
            // column
            for (var i = 0; i < ($('#Xdimension').val()); i++) {
                $('.col-head').append('<th class="grid-header">'+(i+1)+'</th>');
            }
        break;
        case "A1-config":
            $('#plate').prepend('<thead class="col-head"></thead>');
            // column
            for (var i = 0; i < ($('#Xdimension').val()); i++) {
                $('.col-head').append('<th class="grid-header">'+num2alpha(i+1)+'</th>');
            }
        break;
        case "num-config":
            $('#thead').remove();
        break;
        case "free-config":
            $('#thead').remove();
        break;
    }
    
};

// Table headers generation
function rowHeader(attr) {

    // switch board for each type of option
    switch (attr) {

        case "1A-config":
            for (var j = 0; j < ($('#Xdimension').val()); j++) {
              $('.grid-col')
                .append('<td id="'+_.uniqueId("td")+'" class="grid-row" x="'+(j+1)+'"></td>');
            };
            for (var j = 0; j <= ($('#Xdimension').val()); j++) {
              $('tr[y="'+(j+1)+'"]').prepend('<td id="'+_.uniqueId("td")+'" class="grid-row-header">'+num2alpha(j+1)+'</td>');
            };
            $('.col-head').prepend('<th>&nbsp</th>');
            $('.grid-row').append('<input value="" class="noborder input-cell" type="text">');
        break;
        case "A1-config":
            for (var j = 0; j < ($('#Xdimension').val()); j++) {
              $('.grid-col')
                .append('<td id="'+_.uniqueId("td")+'" class="grid-row" x="'+(j+1)+'"></td>');
            };
            for (var j = 0; j <= ($('#Xdimension').val()); j++) {
              $('tr[y="'+(j+1)+'"]').prepend('<td id="'+_.uniqueId("td")+'" class="grid-row-header">'+(j+1)+'</td>');
            };
             $('.col-head').prepend('<th>&nbsp</th>');
             $('.grid-row').append('<input value="" class="noborder input-cell" type="text">');
        break;
        case "num-config":
            $('thead').remove();
            // Add numeric grid
            for (var j = 0; j < ($('#Xdimension').val()); j++) {
              $('.grid-col').append('<td id="'+_.uniqueId('cell')+'" class="grid-row" x="'+(j+1)+'"></td>');
            };
            for (var j = 0; j <= ($('#Ydimension').val()); j++) {
                $('tr.grid-col[y='+j+']').children().attr("y", j);
                for (var i = 0; i <= $('#Xdimension').val(); i++) {   
                    var x = $('td.grid-row[x='+i+']').attr("x");
                    var y = j;
                    $('td.grid-row[x='+i+'][y='+j+']')
                        .prepend('<span class="grid-align-top-left">'+xy2numy(x,y,$('#Xdimension').val())+'</span class="small">')
                        .append('<input value="" class="noborder input-cell" type="text">');

                }
            }
        break;
        case "free-config":
            $('thead').remove();
            for (var j = 0; j < ($('#Xdimension').val()); j++) {
                $('.grid-col')
                    .append('<td id="'+_.uniqueId("td")+'" class="grid-row" x="'+(j+1)+'"></td>');
            };
            $('.grid-row').append('<input value="" class="noborder input-cell" type="text">');
        break;

        default:
            for (var j = 0; j < ($('#Xdimension').val()); j++) {
              $('.grid-col')
                  .append('<td id="'+_.uniqueId("td")+'" class="grid-row" x="'+(j+1)+'"></td>');
            };
            $('.grid-row').append('<input value="" class="noborder input-cell" type="text">');
        break;
    }
    
};

