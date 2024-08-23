

$(document).ready(function() {
    var imageCount = 1;
    var imgUpload = false;
    function updatePrimaryImageSelection() {
        var primarySelected = $('select[name="primary_image"]').filter(function() {
            return $(this).val() == "0";
        }).length > 0;

        if (!primarySelected) {
            $('select[name="primary_image"]:first').val("0");
        }

        $('select[name="primary_image"]').each(function() {
            $(this).off('change').on('change', function() {
                if ($(this).val() == "0") {
                    $('select[name="primary_image"]').not(this).val("1");
                }
                updateRemoveButtonState();
            });
        });
    }

    function handleImagePreview(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $(input).siblings('.preview').attr('src', e.target.result).show();
                imgUpload = true;
                updateAddButtonState(); 
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    function updateAddButtonState() {
        $('.add-image button').prop('disabled', !imgUpload);
    }

    function updateRemoveButtonState() {
        $('.image-container').each(function() {
            var isPrimary = $(this).find('select[name="primary_image"]').val() == "0";
            $(this).find('.remove-image').prop('disabled', isPrimary);
        });
    }

    $('.add-image').click(function(e) {
        e.preventDefault();

        if (imgUpload) {
            imageCount++;
            var html = `
                <div class="image-container">
                    <img class="preview" src="" alt="Image preview">
                    <input type="file" name="property_image" accept="image/*">
                    <select name="primary_image">
                        <option value="0">Primary Image</option>
                        <option value="1" selected>Secondary Image</option>
                    </select>
                    <a href="#" class="remove-image">
                         <button>Remove</button>
                    </a>
                </div>
                <hr/>
            `;
            $('.property-images').append(html);
            imgUpload = false; 
            updatePrimaryImageSelection();
            updateAddButtonState();
            updateRemoveButtonState(); 
        } else {
            alert("Please upload an image before adding another one.");
        }
    });

    $('.property-images').on('click', '.remove-image', function(e) {
        e.preventDefault();
        if (!$(this).prop('disabled')) {
            $(this).closest('.image-container').remove();
            updatePrimaryImageSelection();
            updateAddButtonState(); 
            updateRemoveButtonState();
        }
    });
    $('.property-images').on('change', 'input[type="file"]', function() {
        handleImagePreview(this);
    });
    $('.property-images').on('change', 'select[name="primary_image"]', function() {
        updatePrimaryImageSelection();
    });

    updatePrimaryImageSelection();
    updateAddButtonState(); 
    updateRemoveButtonState();
});