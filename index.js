let unit = document.getElementById("input")
let convert = document.getElementById("output")

let inputValue = document.getElementById("inputValue")
let outputValue = document.getElementById("outputValue")
const trigger = document.getElementById("trigger")

const outputText = document.getElementById("outputAnswer")
const copyOutput = document.getElementById("copy")

const digits = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 7
}
let newInput
let optionNum = 2
let background = false

const units = {
    length: [
        ['m', 'Meters'],
        ['cm', 'Centimeters'],
        ['mm', 'Millimeters'],
        ['km', 'Kilometers'],
        ['in', 'Inches'],
        ['ft', 'Feet'],
        ['yd', 'Yards'],
        ['mi', 'Miles']
    ],

    temperature: [
        ['°C', 'Celcius'],
        ['°F', 'Fahrenheit'],
        ['K', 'Kelvin']
    ],

    time: [
        ['s', 'Seconds'],
        ['ms', 'Milliseconds'],
        ['min', 'Minutes'],
        ['hrs', 'Hours'],
        ['days', 'Days'],
        ['weeks', 'Weeks'],
        ['months', 'Months'],
        ['years', 'Years'],
        ['decades', 'Decades'],
        ['centuries', 'Centuries']
    ],

    mass: [
        ['T', 'Tons'],
        ['T(UK)', 'UK Tons'],
        ['T(US)', 'US Tons'],
        ['lb', 'Pounds'],
        ['oz', 'Ounces'],
        ['kg', 'Kilograms'],
        ['g', 'Grams']
    ],

    speed: [
        ['m/s', 'Meters per second'],
        ['m/h', 'Meters per hour'],
        ['km/s', 'Kilometers per second'],
        ['km/h', 'Kilometers per hour'],
        ['in/s', 'Inches per second'],
        ['in/h', 'Inches per hour'],
        ['ft/s', 'Feet per second'],
        ['ft/h', 'Feet per hour'],
        ['mi/s', 'Miles per second'],
        ['mi/h', 'Miles per hour']
    ],

    area: [
        ['ac', 'Acres'],
        ['a', 'Ares'],
        ['ha', 'Hectares'],
        ['cm²', 'Square Centimeters'],
        ['m²', 'Square Meters'],
        ['ft²', 'Square Feet'],
        ['in²', 'Square Inches']
    ],

    volume: [
        ['gal(UK)', 'UK Gallons'],
        ['gal(US)', 'US Gallons'],
        ['in³', 'Cubic Inches'],
        ['ft³', 'Cubic Feet'],
        ['cm³', 'Cubic Centimeters'],
        ['m³', 'Cubic Meters'],
        ['ml', 'Milliliters'],
        ['l', 'Liters']
    ]
}

function updateOptions1(category) {
    unit.innerHTML = ""
    inputValue.value = ""
    units[category].forEach(([value, text]) => {
        const option = document.createElement("option")
        option.value = value
        option.textContent = text
        unit.appendChild(option)
    })
}

function updateOptions2(category) {
    output.innerHTML = ""
    outputValue.value = ""
    units[category].forEach(([value, text]) => {
        const option = document.createElement("option")
        option.value = value
        option.textContent = text
        output.appendChild(option)
    })
}

const option = document.querySelectorAll(".convertOption")
const selectedOption = option.forEach(selection => {
    selection.addEventListener('click', () => {
        const optionName = selection.textContent
        switch (optionName) {
            case "Length":
                updateOptions1("length")
                updateOptions2("length")
                optionNum = 2
                break
            case "Temperature":
                updateOptions1("temperature")
                updateOptions2("temperature")
                optionNum = 3
                break
            case "Time":
                updateOptions1("time")
                updateOptions2("time")
                optionNum = 7
                break
            case "Mass":
                updateOptions1("mass")
                updateOptions2("mass")
                optionNum = 5
                break
            case "Speed":
                updateOptions1("speed")
                updateOptions2("speed")
                optionNum = 6
                break
            case "Area":
                updateOptions1("area")
                updateOptions2("area")
                optionNum = 1
                break
            case "Volume":
                updateOptions1("volume")
                updateOptions2("volume")
                optionNum = 4
                break
        }
    })
})

function messageDisplay() {
    let value1
    let value2

    let optionValues = unit.options[unit.selectedIndex].textContent
    console.log(optionValues)
    switch (optionValues) {
        case 'Meters':
            value1 = 'm'
            break
        case 'Centimeters':
            value1 = 'cm'
            break
        case 'Millimeters':
            value1 = 'mm'
            break
        case 'Kilometers':
            value1 = 'km'
            break
        case 'Inches':
            value1 = 'in'
            break
        case 'Feet':
            value1 = 'ft'
            break
        case 'Yards':
            value1 = 'yd'
            break
        case 'Miles':
            value1 = 'mi'
            break
        case 'Celcius':
            value1 = '°C'
            break
        case 'Fahrenheit':
            value1 = '°F'
            break
        case 'Kelvin':
            value1 = 'K'
            break
        case 'Seconds':
            value1 = 's'
            break
        case 'Milliseconds':
            value1 = 'ms'
            break
        case 'Minutes':
            value1 = 'min'
            break
        case 'Hours':
            value1 = 'hrs'
            break
        case 'Days':
            value1 = 'days'
            break
        case 'Weeks':
            value1 = 'weeks'
            break
        case 'Months':
            value1 = 'months'
            break
        case 'Years':
            value1 = 'years'
            break
        case 'Decades':
            value1 = 'decades'
            break
        case 'Centuries':
            value1 = 'centuries'
            break
        case 'Tons':
            value1 = 'T'
            break
        case 'UK Tons':
            value1 = 'T(UK)'
            break
        case 'US Tons':
            value1 = 'T(US)'
            break
        case 'Pounds':
            value1 = 'lb'
            break
        case 'Ounces':
            value1 = 'oz'
            break
        case 'Kilograms':
            value1 = 'kg'
            break
        case 'Grams':
            value1 = 'g'
            break
        case 'Meters per second':
            value1 = 'm/s'
            break
        case 'Meters per hour':
            value1 = 'm/h'
            break
        case 'Kilometers per second':
            value1 = 'km/s'
            break
        case 'Kilometers per hour':
            value1 = 'km/h'
            break
        case 'Inches per second':
            value1 = 'in/s'
            break
        case 'Inches per hour':
            value1 = 'in/h'
            break
        case 'Feet per second':
            value1 = 'ft/s'
            break
        case 'Feet per hour':
            value1 = 'ft/h'
            break
        case 'Miles per second':
            value1 = 'mi/s'
            break
        case 'Miles per hour':
            value1 = 'mi/h'
            break
        case 'Acres':
            value1 = 'ac'
            break
        case 'Ares':
            value1 = 'a'
            break
        case 'Hectares':
            value1 = 'ha'
            break
        case 'Square Centimeters':
            value1 = 'cm²'
            break
        case 'Square Meters':
            value1 = 'm²'
            break
        case 'Square Feet':
            value1 = 'ft²'
            break
        case 'Square Inches':
            value1 = 'in²'
            break
        case 'UK Gallons':
            value1 = 'gal(UK)'
            break
        case 'US Gallons':
            value1 = 'gal(US)'
            break
        case 'Cubic Inches':
            value1 = 'in³'
            break
        case 'Cubic Feet':
            value1 = 'ft³'
            break
        case 'Cubic Centimeters':
            value1 = 'cm³'
            break
        case 'Cubic Meters':
            value1 = 'm³'
            break
        case 'Milliliters':
            value1 = 'ml'
            break
        case 'Liters':
            value1 = 'l'
            break
    }

    const optionValuess = convert.options[convert.selectedIndex].textContent
    switch (optionValuess) {
        case 'Meters':
            value2 = 'm'
            break
        case 'Centimeters':
            value2 = 'cm'
            break
        case 'Millimeters':
            value2 = 'mm'
            break
        case 'Kilometers':
            value2 = 'km'
            break
        case 'Inches':
            value2 = 'in'
            break
        case 'Feet':
            value2 = 'ft'
            break
        case 'Yards':
            value2 = 'yd'
            break
        case 'Miles':
            value2 = 'mi'
            break
        case 'Celcius':
            value2 = '°C'
            break
        case 'Fahrenheit':
            value2 = '°F'
            break
        case 'Kelvin':
            value2 = 'K'
            break
        case 'Seconds':
            value2 = 's'
            break
        case 'Milliseconds':
            value2 = 'ms'
            break
        case 'Minutes':
            value2 = 'min'
            break
        case 'Hours':
            value2 = 'hrs'
            break
        case 'Days':
            value2 = 'days'
            break
        case 'Weeks':
            value2 = 'weeks'
            break
        case 'Months':
            value2 = 'months'
            break
        case 'Years':
            value2 = 'years'
            break
        case 'Decades':
            value2 = 'decades'
            break
        case 'Centuries':
            value2 = 'centuries'
            break
        case 'Tons':
            value2 = 'T'
            break
        case 'UK Tons':
            value2 = 'T(UK)'
            break
        case 'US Tons':
            value2 = 'T(US)'
            break
        case 'Pounds':
            value2 = 'lb'
            break
        case 'Ounces':
            value2 = 'oz'
            break
        case 'Kilograms':
            value2 = 'kg'
            break
        case 'Grams':
            value2 = 'g'
            break
        case 'Meters per second':
            value2 = 'm/s'
            break
        case 'Meters per hour':
            value2 = 'm/h'
            break
        case 'Kilometers per second':
            value2 = 'km/s'
            break
        case 'Kilometers per hour':
            value2 = 'km/h'
            break
        case 'Inches per second':
            value2 = 'in/s'
            break
        case 'Inches per hour':
            value2 = 'in/h'
            break
        case 'Feet per second':
            value2 = 'ft/s'
            break
        case 'Feet per hour':
            value2 = 'ft/h'
            break
        case 'Miles per second':
            value2 = 'mi/s'
            break
        case 'Miles per hour':
            value2 = 'mi/h'
            break
        case 'Acres':
            value2 = 'ac'
            break
        case 'Ares':
            value2 = 'a'
            break
        case 'Hectares':
            value2 = 'ha'
            break
        case 'Square Centimeters':
            value2 = 'cm²'
            break
        case 'Square Meters':
            value2 = 'm²'
            break
        case 'Square Feet':
            value2 = 'ft²'
            break
        case 'Square Inches':
            value2 = 'in²'
            break
        case 'UK Gallons':
            value2 = 'gal(UK)'
            break
        case 'US Gallons':
            value2 = 'gal(US)'
            break
        case 'Cubic Inches':
            value2 = 'in³'
            break
        case 'Cubic Feet':
            value2 = 'ft³'
            break
        case 'Cubic Centimeters':
            value2 = 'cm³'
            break
        case 'Cubic Meters':
            value2 = 'm³'
            break
        case 'Milliliters':
            value2 = 'ml'
            break
        case 'Liters':
            value2 = 'l'
            break
    }

    outputText.textContent = `${inputValue.value} ${value1} = ${outputValue.value} ${value2}`
}

copyOutput.addEventListener('click', async () => {
    await navigator.clipboard.writeText(outputText.textContent)
    copyOutput.textContent = 'Copied!'
    setTimeout(() => {
        copyOutput.textContent = 'Copy Result'
    }, 1000)
})

function areaConversion() {
    if (unit.value === 'ac') {
        if (convert.value === 'ac') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 43560
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 6272640
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'm²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (6272640 * 0.0254 * 0.0254)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'cm²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (6272640 * 2.54 * 2.54)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'a') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (62726.4 * 0.0254 * 0.0254)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ha') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (627.264 * 0.0254 * 0.0254)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'a') {
        if (convert.value === 'ac') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= ((100 / 0.09290304)) / 43560
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (100 / 0.09290304)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (100 / 0.00064516)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'm²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 100
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'cm²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'a') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ha') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 100
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'ha') {
        if (convert.value === 'ac') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (10000 / 0.09290304) / 43560
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (10000 / 0.09290304)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (10000 / 0.00064516)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'm²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 10000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'cm²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 100000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'a') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 100
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ha') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'cm²') {
        if (convert.value === 'ac') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= (929.0304 / 43560)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 929.0304
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 6.4516
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'm²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 10000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'cm²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'a') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ha') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 100000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'ft²') {
        if (convert.value === 'ac') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 43560
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 144
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'm²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.09290304
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'cm²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 929.0304
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'a') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0009290304
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ha') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.000009290304
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'in²') {
        if (convert.value === 'ac') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 6272640
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 144
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'm²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.00064516
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'cm²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 6.4516
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'a') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0000064516
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ha') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.000000064516
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'm²') {
        if (convert.value === 'ac') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 4046.8564224
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.09290304
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.00064516
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'm²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'cm²') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 10000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'a') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 100
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ha') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 10000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    }
    messageDisplay()
}

function lengthConversion() {
    if (unit.value === "m") {
        if (convert.value === "m") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "cm") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 100
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "mm") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "km") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "in") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.0254
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "ft") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.3048
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "yd") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.9144
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "mi") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1609.344
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === "cm") {
        if (convert.value === "cm") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "m") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 100
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "mm") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 10
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "km") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 100000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "in") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 2.54
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "ft") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 30.48
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "yd") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 91.44
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "mi") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 160934.4
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === "mm") {
        if (convert.value === "mm") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "cm") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 10
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "m") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "km") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "in") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 25.4
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "ft") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 304.8
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "yd") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 914.4
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "mi") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1609344
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === "km") {
        if (convert.value === "km") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "cm") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 100000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "mm") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "m") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "in") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.0000254
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "ft") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.0003048
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "yd") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.0009144
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "mi") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1.609344
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === "in") {
        if (convert.value === "in") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "cm") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 2.54
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "mm") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 25.4
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "km") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0000254
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "m") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0254
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "ft") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 12
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "yd") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 36
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "mi") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 63360
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === "ft") {
        if (convert.value === "ft") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "cm") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 30.48
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "mm") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 304.8
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "km") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0003048
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "in") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 12
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "m") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.3048
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "yd") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 3
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "mi") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 5280
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === "yd") {
        if (convert.value === "yd") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "cm") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 91.44
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "mm") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 914.4
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "km") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0009144
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "in") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 36
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "ft") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "m") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.9144
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "mi") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1760
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === "mi") {
        if (convert.value === "mi") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "cm") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 160934.4
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "mm") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1609344
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "km") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1.609344
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "in") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 63360
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "ft") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 5280
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "m") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1609.344
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === "yd") {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1760
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    }
    messageDisplay()
}

function tempConversion() {
    if (unit.value === '°C') {
        if (convert.value === '°C') {

            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === '°F') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput = newInput * 9 / 5 + 32
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'K') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput += 273.15
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === '°F') {
        if (convert.value === '°F') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === '°C') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput = (newInput - 32) * 5 / 9
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'K') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput = (newInput - 32) * 5 / 9 + 273.15
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'K') {
        if (convert.value === 'K') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === '°C') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput -= 273.15
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === '°F') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput = (newInput - 273.15) * 9 / 5 + 32
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    }
    messageDisplay()
}

function volumeConversion() {
    if (unit.value === 'gal(UK)') {
        if (convert.value === 'gal(UK)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'gal(US)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1.2009499255
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1.2009499255 * 231)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1.2009499255 * 231 / 1728)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'cm³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1.2009499255 * 231 * 16.387064)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'm³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (0.12009499255 * 0.231 * 0.16387064)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ml') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1.2009499255 * 231 * 16.387064)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'l') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1.2009499255 * 0.231 * 16.387064)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'gal(US)') {
        if (convert.value === 'gal(UK)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1.2009499255
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'gal(US)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 231
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (231 / 1728)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'cm³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (231 * 16.387064)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'm³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (0.0231 * 0.16387064)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ml') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (231 * 16.387064)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'l') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (0.231 * 16.387064)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'in³') {
        if (convert.value === 'gal(UK)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= (231 * 1.2009499255)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'gal(US)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 231
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1728
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'cm³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 16.387064
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'm³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.000016387064
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ml') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 16.387064
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'l') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.016387064
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'ft³') {
        if (convert.value === 'gal(UK)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1728 / 231) / 1.2009499255
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'gal(US)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1728 / 231)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1728
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'cm³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1728 * 16.387064
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'm³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.1728 * 0.16387064
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ml') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1728 * 16.387064
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'l') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1.728 * 16.387064
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'cm³') {
        if (convert.value === 'gal(UK)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= (16.387064 * 231 * 1.2009499255)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'gal(US)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= (16.387064 * 231)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 16.387064
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= (16.387064 * 1728)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'cm³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'm³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ml') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'l') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'm³') {
        if (convert.value === 'gal(UK)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1000000 / (16.387064 * 231 * 1.2009499255))
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'gal(US)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1000000 / (16.387064 * 231))
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1000000 / 16.387064)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1000000 / (16.387064 * 1728))
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'cm³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'm³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ml') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'l') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'ml') {
        if (convert.value === 'gal(UK)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= (16.387064 * 231 * 1.2009499255)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'gal(US)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= (16.387064 * 231)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 16.387064
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= (16.387064 * 1728)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'cm³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'm³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ml') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'l') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'l') {
        if (convert.value === 'gal(UK)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1000 / (16.387064 * 231 * 1.2009499255))
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'gal(US)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1000 / (16.387064 * 231))
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1000 / 16.387064)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1000 / (16.387064 * 1728))
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'cm³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'm³') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ml') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'l') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    }
    messageDisplay()
}

function massConversion() {
    if (unit.value === 'T') {
        if (convert.value === 'T') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'T(UK)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.984206527611071
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'T(US)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1.1023113109244
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'lb') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 2204.6226218488
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'oz') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 35273.9619495808
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'kg') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'g') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'T(UK)') {
        if (convert.value === 'T') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.984206527611071
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'T(UK)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'T(US)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1.12
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'lb') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 2240
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'oz') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 35840
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'kg') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1000 / 0.984206527611071)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'g') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1000000 / 0.984206527611071)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'T(US)') {
        if (convert.value === 'T') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1.1023113109244
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'T(UK)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1.12
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'T(US)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'lb') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 2000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'oz') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 32000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'kg') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 907.184739999990045
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'g') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 907184.739999990045
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'lb') {
        if (convert.value === 'T') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 2204.6226218488
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'T(UK)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 2240
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'T(US)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 2000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'lb') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'oz') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 16
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'kg') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.453592369999995
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'g') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 453.592369999995
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'oz') {
        if (convert.value === 'T') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 35273.9619495808
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'T(UK)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 35840
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'T(US)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 32000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'lb') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 16
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'oz') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'kg') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.028349523125
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'g') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 28.349523125
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'kg') {
        if (convert.value === 'T') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'T(UK)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.000984206527611071
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'T(US)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0011023113109244
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'lb') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 2.2046226218488
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'oz') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 35.2739619495808
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'kg') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'g') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'g') {
        if (convert.value === 'T') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'T(UK)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.000000984206527611071
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'T(US)') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0000011023113109244
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'lb') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0022046226218488
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'oz') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0352739619495808
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'kg') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'g') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    }
    messageDisplay()
}

function speedConversion() {
    if (unit.value === 'm/s') {
        if (convert.value === 'm/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'm/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3600
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'km/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'km/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3.6
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.0254
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 0.0254)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.3048
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 0.3048)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'mi/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1609.344
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'mi/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 1609.344)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'm/h') {
        if (convert.value === 'm/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 3600
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'm/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'km/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 3600000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'km/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 91.44
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 91.44)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1097.28
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 1097.28)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'mi/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 5793638.4
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'mi/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 5793638.4)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'km/s') {
        if (convert.value === 'm/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'm/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3600000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'km/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'km/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3600
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.0000254
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 0.0000254)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.0003048
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 0.0003048)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'mi/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1.609344
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'mi/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 1.609344)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'km/h') {
        if (convert.value === 'm/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1000 / 3600)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'm/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'km/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 3600
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'km/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.09144
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 0.09144)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1.09728
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 1.09728)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'mi/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 5793.6384
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'mi/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 5793.6384)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'in/s') {
        if (convert.value === 'm/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0254
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'm/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 91.44
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'km/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0000254
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'km/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.09144
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3600
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 12
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 300
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'mi/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 63360
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'mi/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 63360)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'in/h') {
        if (convert.value === 'm/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (0.0254 / 3600)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'm/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0254
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'km/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (0.0000254 / 3600)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'km/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0000254
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 3600
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 43200
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 12
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'mi/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 228096000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'mi/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 63360
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'ft/s') {
        if (convert.value === 'm/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.3048
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'm/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1097.28
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'km/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0003048
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'km/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1.09728
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 12
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 43200
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3600
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'mi/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 5280
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'mi/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 5280)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'ft/h') {
        if (convert.value === 'm/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (0.3048 / 3600)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'm/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.3048
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'km/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (0.3048 / 3600000)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'km/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0003048
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 300
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 12
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 3600
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'mi/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 19008000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'mi/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 5280
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'mi/s') {
        if (convert.value === 'm/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1609.344
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'm/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 5793638.4
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 63360
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 228096000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 5280
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 19008000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'mi/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'mi/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3600
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'km/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1.609344
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'km/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 5793.6384
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'mi/h') {
        if (convert.value === 'm/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.44704
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'm/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1609.344
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'km/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.00044704
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'km/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1.609344
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 17.6
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'in/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 63660
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (5280 / 3600)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'ft/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 5280
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'mi/s') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 3600
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'mi/h') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    }
    messageDisplay()
}

function timeConversion() {
    if (unit.value === 'ms') {
        if (convert.value === 'ms') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 's') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'min') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 60000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'hrs') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 3600000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'days') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 86400000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'weeks') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 604800000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'months') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 2629800000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'years') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 31557600000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'decades') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 315576000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'centuries') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 3155760000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 's') {
        if (convert.value === 'ms') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 's') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'min') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 60
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'hrs') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 3600
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'days') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 86400
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'weeks') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 604800
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'months') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 2629800
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'years') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 31557600
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'decades') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 315576000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'centuries') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 3155760000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'min') {
        if (convert.value === 'ms') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 60000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 's') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 60
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'min') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'hrs') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 60
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'days') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1440
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'weeks') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 10080
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'months') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 43830
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'years') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 525960
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'decades') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 5259600
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'centuries') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 52596000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'hrs') {
        if (convert.value === 'ms') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3600000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 's') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3600
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'min') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 60
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'hrs') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'days') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 24
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'weeks') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 168
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'months') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 730.5
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'years') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 8766
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'decades') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 87660
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'centuries') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 876600
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'days') {
        if (convert.value === 'ms') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 86400000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 's') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 86400
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'min') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1440
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'hrs') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 24
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'days') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'weeks') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 7
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'months') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 30.4375
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'years') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 365.25
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'decades') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 3652.5
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'centuries') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 36525
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'weeks') {
        if (convert.value === 'ms') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 604800000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 's') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 604800
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'min') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 10080
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'hrs') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 168
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'days') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 7
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'weeks') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'months') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= (30.4375 / 7)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'years') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 52
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'decades') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 520
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'centuries') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 5200
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'months') {
        if (convert.value === 'ms') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 2629800000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 's') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 2629800
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'min') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 43830
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'hrs') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 730.5
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'days') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 30.4375
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'weeks') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (30.4375 / 7)
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'months') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'years') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 12
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'decades') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 120
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'centuries') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1200
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'years') {
        if (convert.value === 'ms') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 31557600000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 's') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 31557600
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'min') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 525960
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'hrs') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 8766
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'days') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 365.25
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'weeks') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 52
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'months') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 12
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'years') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'decades') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 10
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'centuries') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 100
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'decades') {
        if (convert.value === 'ms') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 315576000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 's') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 315576000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'min') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 5259600
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'hrs') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 87660
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'days') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3652.5
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'weeks') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 520
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'months') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 120
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'years') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 10
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'decades') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'centuries') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 10
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    } else if (unit.value === 'centuries') {
        if (convert.value === 'ms') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3155760000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 's') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3155760000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'min') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 52596000
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'hrs') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 876600
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'days') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 36525
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'weeks') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 5200
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'months') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1200
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'years') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 100
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'decades') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 10
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (convert.value === 'centuries') {
            let newestInput = inputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        }
    }
    messageDisplay()
}

function areaConversion1() {
    if (convert.value === 'ac') {
        if (unit.value === 'ac') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 43560
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 6272640
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'm²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (6272640 * 0.0254 * 0.0254)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'cm²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (6272640 * 2.54 * 2.54)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'a') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (62726.4 * 0.0254 * 0.0254)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ha') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (627.264 * 0.0254 * 0.0254)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'a') {
        if (unit.value === 'ac') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= ((100 / 0.09290304)) / 43560
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (100 / 0.09290304)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (100 / 0.00064516)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'm²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 100
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'cm²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'a') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ha') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 100
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'ha') {
        if (unit.value === 'ac') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (10000 / 0.09290304) / 43560
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (10000 / 0.09290304)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (10000 / 0.00064516)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'm²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 10000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'cm²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 100000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'a') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 100
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ha') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'cm²') {
        if (unit.value === 'ac') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= (929.0304 / 43560)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 929.0304
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 6.4516
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'm²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 10000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'cm²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'a') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ha') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 100000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'ft²') {
        if (unit.value === 'ac') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 43560
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 144
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'm²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.09290304
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'cm²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 929.0304
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'a') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0009290304
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ha') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.000009290304
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'in²') {
        if (unit.value === 'ac') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 6272640
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 144
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'm²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.00064516
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'cm²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 6.4516
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'a') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0000064516
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ha') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.000000064516
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'm²') {
        if (unit.value === 'ac') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 4046.8564224
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.09290304
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.00064516
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'm²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'cm²') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 10000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'a') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 100
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ha') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 10000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    }
    messageDisplay()
}

function lengthConversion1() {
    if (convert.value === "m") {
        if (unit.value === "m") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "cm") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 100
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "mm") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "km") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "in") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.0254
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "ft") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.3048
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "yd") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.9144
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "mi") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1609.344
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === "cm") {
        if (unit.value === "cm") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "m") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 100
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "mm") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 10
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "km") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 100000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "in") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 2.54
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "ft") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 30.48
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "yd") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 91.44
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "mi") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 160934.4
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === "mm") {
        if (unit.value === "mm") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "cm") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 10
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "m") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "km") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "in") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 25.4
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "ft") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 304.8
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "yd") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 914.4
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "mi") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1609344
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === "km") {
        if (unit.value === "km") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "cm") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 100000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "mm") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "m") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "in") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.0000254
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "ft") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.0003048
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "yd") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.0009144
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "mi") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1.609344
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === "in") {
        if (unit.value === "in") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "cm") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 2.54
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "mm") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 25.4
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "km") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0000254
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "m") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0254
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "ft") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 12
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "yd") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 36
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "mi") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 63360
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === "ft") {
        if (unit.value === "ft") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "cm") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 30.48
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "mm") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 304.8
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "km") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0003048
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "in") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 12
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "m") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.3048
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "yd") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 3
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "mi") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 5280
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === "yd") {
        if (unit.value === "yd") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "cm") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 91.44
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "mm") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 914.4
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "km") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0009144
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "in") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 36
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "ft") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "m") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.9144
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "mi") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1760
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === "mi") {
        if (unit.value === "mi") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "cm") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 160934.4
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "mm") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1609344
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "km") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1.609344
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "in") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 63360
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "ft") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 5280
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "m") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1609.344
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === "yd") {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1760
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    }
    messageDisplay()
}

function tempConversion1() {
    if (convert.value === '°C') {
        if (unit.value === '°C') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === '°F') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput = newInput * 9 / 5 + 32
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'K') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput += 273.15
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === '°F') {
        if (unit.value === '°F') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === '°C') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput = (newInput - 32) * 5 / 9
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'K') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput = (newInput - 32) * 5 / 9 + 273.15
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'K') {
        if (unit.value === 'K') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === '°C') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput -= 273.15
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === '°F') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput = (newInput - 273.15) * 9 / 5 + 32
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    }
    messageDisplay()
}

function volumeConversion1() {
    if (convert.value === 'gal(UK)') {
        if (unit.value === 'gal(UK)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'gal(US)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1.2009499255
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1.2009499255 * 231)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1.2009499255 * 231 / 1728)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'cm³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1.2009499255 * 231 * 16.387064)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'm³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (0.12009499255 * 0.231 * 0.16387064)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ml') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1.2009499255 * 231 * 16.387064)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'l') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1.2009499255 * 0.231 * 16.387064)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'gal(US)') {
        if (unit.value === 'gal(UK)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1.2009499255
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'gal(US)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 231
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (231 / 1728)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'cm³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (231 * 16.387064)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'm³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (0.0231 * 0.16387064)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ml') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (231 * 16.387064)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'l') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (0.231 * 16.387064)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'in³') {
        if (unit.value === 'gal(UK)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= (231 * 1.2009499255)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'gal(US)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 231
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1728
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'cm³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 16.387064
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'm³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.000016387064
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ml') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 16.387064
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'l') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.016387064
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'ft³') {
        if (unit.value === 'gal(UK)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1728 / 231) / 1.2009499255
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'gal(US)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1728 / 231)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1728
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'cm³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1728 * 16.387064
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'm³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.1728 * 0.16387064
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ml') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1728 * 16.387064
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'l') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1.728 * 16.387064
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'cm³') {
        if (unit.value === 'gal(UK)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= (16.387064 * 231 * 1.2009499255)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'gal(US)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= (16.387064 * 231)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 16.387064
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= (16.387064 * 1728)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'cm³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'm³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ml') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'l') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'm³') {
        if (unit.value === 'gal(UK)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1000000 / (16.387064 * 231 * 1.2009499255))
            let newerInput = newInpuinoLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (unit.value === 'gal(US)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1000000 / (16.387064 * 231))
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1000000 / 16.387064)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1000000 / (16.387064 * 1728))
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'cm³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'm³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ml') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'l') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'ml') {
        if (unit.value === 'gal(UK)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= (16.387064 * 231 * 1.2009499255)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'gal(US)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= (16.387064 * 231)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 16.387064
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= (16.387064 * 1728)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'cm³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'm³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ml') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'l') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'l') {
        if (unit.value === 'gal(UK)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1000 / (16.387064 * 231 * 1.2009499255))
            let newerInput = newInpuinoLocaleString('en-US', digits)
            outputValue.value = String(newerInput)
        } else if (unit.value === 'gal(US)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1000 / (16.387064 * 231))
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1000 / 16.387064)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1000 / (16.387064 * 1728))
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'cm³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'm³') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ml') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'l') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    }
    messageDisplay()
}

function massConversion1() {
    if (convert.value === 'T') {
        if (unit.value === 'T') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'T(UK)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.984206527611071
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'T(US)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1.1023113109244
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'lb') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 2204.6226218488
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'oz') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 35273.9619495808
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'kg') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'g') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'T(UK)') {
        if (unit.value === 'T') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.984206527611071
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'T(UK)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'T(US)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1.12
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'lb') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 2240
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'oz') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 35840
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'kg') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1000 / 0.984206527611071)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'g') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1000000 / 0.984206527611071)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'T(US)') {
        if (unit.value === 'T') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1.1023113109244
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'T(UK)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1.12
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'T(US)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'lb') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 2000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'oz') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 32000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'kg') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 907.184739999990045
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'g') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 907184.739999990045
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'lb') {
        if (unit.value === 'T') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 2204.6226218488
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'T(UK)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 2240
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'T(US)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 2000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'lb') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'oz') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 16
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'kg') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.453592369999995
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'g') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 453.592369999995
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'oz') {
        if (unit.value === 'T') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 35273.9619495808
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'T(UK)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 35840
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'T(US)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 32000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'lb') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 16
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'oz') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'kg') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.028349523125
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'g') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 28.349523125
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'kg') {
        if (unit.value === 'T') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'T(UK)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.000984206527611071
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'T(US)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0011023113109244
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'lb') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 2.2046226218488
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'oz') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 35.2739619495808
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'kg') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'g') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'g') {
        if (unit.value === 'T') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'T(UK)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.000000984206527611071
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'T(US)') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0000011023113109244
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'lb') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0022046226218488
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'oz') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0352739619495808
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'kg') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'g') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    }
    messageDisplay()
}

function speedConversion1() {
    if (convert.value === 'm/s') {
        if (unit.value === 'm/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'm/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3600
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'km/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'km/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3.6
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.0254
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 0.0254)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.3048
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 0.3048)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'mi/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1609.344
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'mi/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 1609.344)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'm/h') {
        if (unit.value === 'm/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 3600
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'm/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'km/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 3600000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'km/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 91.44
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 91.44)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1097.28
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 1097.28)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'mi/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 5793638.4
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'mi/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 5793638.4)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'km/s') {
        if (unit.value === 'm/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'm/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3600000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'km/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'km/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3600
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.0000254
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 0.0000254)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.0003048
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 0.0003048)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'mi/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1.609344
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'mi/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 1.609344)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'km/h') {
        if (unit.value === 'm/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (1000 / 3600)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'm/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'km/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 3600
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'km/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 0.09144
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 0.09144)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1.09728
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 1.09728)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'mi/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 5793.6384
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'mi/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 5793.6384)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'in/s') {
        if (unit.value === 'm/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0254
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'm/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 91.44
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'km/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0000254
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'km/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.09144
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3600
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 12
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 300
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'mi/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 63360
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'mi/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 63360)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'in/h') {
        if (unit.value === 'm/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (0.0254 / 3600)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'm/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0254
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'km/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (0.0000254 / 3600)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'km/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0000254
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 3600
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 43200
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 12
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'mi/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 228096000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'mi/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 63360
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'ft/s') {
        if (unit.value === 'm/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.3048
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'm/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1097.28
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'km/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0003048
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'km/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1.09728
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 12
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 43200
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3600
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'mi/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 5280
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'mi/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (3600 / 5280)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'ft/h') {
        if (unit.value === 'm/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (0.3048 / 3600)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'm/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.3048
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'km/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (0.3048 / 3600000)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'km/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.0003048
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 300
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 12
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 3600
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'mi/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 19008000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'mi/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 5280
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'mi/s') {
        if (unit.value === 'm/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1609.344
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'm/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 5793638.4
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 63360
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 228096000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 5280
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 19008000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'mi/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'mi/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3600
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'km/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1.609344
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'km/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 5793.6384
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'mi/h') {
        if (unit.value === 'm/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.44704
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'm/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1609.344
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'km/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 0.00044704
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'km/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1.609344
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 17.6
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'in/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 63660
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (5280 / 3600)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'ft/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 5280
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'mi/s') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 3600
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'mi/h') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    }
    messageDisplay()
}

function timeConversion1() {
    if (convert.value === 'ms') {
        if (unit.value === 'ms') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 's') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'min') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 60000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'hrs') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 3600000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'days') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 86400000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'weeks') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 604800000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'months') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 2629800000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'years') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 31557600000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'decades') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 315576000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'centuries') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 3155760000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 's') {
        if (unit.value === 'ms') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 's') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'min') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 60
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'hrs') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 3600
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'days') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 86400
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'weeks') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 604800
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'months') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 2629800
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'years') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 31557600
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'decades') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 315576000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'centuries') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 3155760000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'min') {
        if (unit.value === 'ms') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 60000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 's') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 60
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'min') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'hrs') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 60
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'days') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1440
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'weeks') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 10080
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'months') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 43830
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'years') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 525960
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'decades') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 5259600
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'centuries') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 52596000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'hrs') {
        if (unit.value === 'ms') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3600000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 's') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3600
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'min') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 60
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'hrs') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'days') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 24
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'weeks') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 168
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'months') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 730.5
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'years') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 8766
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'decades') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 87660
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'centuries') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 876600
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'days') {
        if (unit.value === 'ms') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 86400000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 's') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 86400
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'min') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1440
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'hrs') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 24
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'days') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'weeks') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 7
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'months') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 30.4375
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'years') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 365.25
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'decades') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 3652.5
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'centuries') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 36525
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'weeks') {
        if (unit.value === 'ms') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 604800000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 's') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 604800
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'min') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 10080
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'hrs') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 168
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'days') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 7
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'weeks') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'months') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= (30.4375 / 7)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'years') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 52
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'decades') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 520
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'centuries') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 5200
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'months') {
        if (unit.value === 'ms') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 2629800000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 's') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 2629800
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'min') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 43830
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'hrs') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 730.5
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'days') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 30.4375
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'weeks') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= (30.4375 / 7)
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'months') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'years') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 12
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'decades') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 120
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'centuries') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 1200
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'years') {
        if (unit.value === 'ms') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 31557600000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 's') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 31557600
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'min') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 525960
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'hrs') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 8766
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'days') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 365.25
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'weeks') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 52
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'months') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 12
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'years') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'decades') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 10
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'centuries') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 100
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'decades') {
        if (unit.value === 'ms') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 315576000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 's') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 315576000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'min') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 5259600
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'hrs') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 87660
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'days') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3652.5
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'weeks') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 520
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'months') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 120
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'years') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 10
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'decades') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'centuries') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput /= 10
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    } else if (convert.value === 'centuries') {
        if (unit.value === 'ms') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3155760000000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 's') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 3155760000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'min') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 52596000
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'hrs') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 876600
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'days') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 36525
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'weeks') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 5200
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'months') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1200
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'years') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 100
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'decades') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 10
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        } else if (unit.value === 'centuries') {
            let newestInput = outputValue.value.replace(/,/g, "")
            newInput = Number(newestInput)
            newInput *= 1
            let newerInput = newInput.toLocaleString('en-US', digits)
            inputValue.value = String(newerInput)
        }
    }
    messageDisplay()
}


function conversion() {
    if (optionNum === 2) {
        lengthConversion()
    }
    if (optionNum === 3) {
        tempConversion()
    }
    if (optionNum === 7) {
        timeConversion()
    }
    if (optionNum === 5) {
        massConversion()
    }
    if (optionNum === 6) {
        speedConversion()
    }
    if (optionNum === 1) {
        areaConversion()
    }
    if (optionNum === 4) {
        volumeConversion()
    }
}

function conversion1() {
    if (optionNum === 2) {
        lengthConversion1()
    }
    if (optionNum === 3) {
        tempConversion1()
    }
    if (optionNum === 7) {
        timeConversion1()
    }
    if (optionNum === 5) {
        massConversion1()
    }
    if (optionNum === 6) {
        speedConversion1()
    }
    if (optionNum === 1) {
        areaConversion1()
    }
    if (optionNum === 4) {
        volumeConversion1()
    }
}

function formatNumbers(nums) {
    let [integerPart, decimalPart] = nums.split('.')
    if (integerPart) {
        const num = Number(integerPart)
        integerPart = num.toLocaleString('en-US', digits)
    }
    if (decimalPart !== undefined) {
        nums = `${integerPart}.${decimalPart.slice(0)}`
    } else {
        nums = integerPart
    }
}

unit.addEventListener('change', () => {
    inputValue.value = inputValue.value.replace(/,/g, "")
    outputValue.value = outputValue.value.replace(/,/g, "")
    let [integerPart1, decimalPart1] = inputValue.value.split('.')
    if (integerPart1) {
        const num = Number(integerPart1)
        integerPart1 = num.toLocaleString('en-US', digits)
    }
    if (decimalPart1 !== undefined) {
        inputValue.value = `${integerPart1}.${decimalPart1.slice(0)}`
    } else {
        inputValue.value = integerPart1
    }

    let [integerPart2, decimalPart2] = outputValue.value.split('.')
    if (integerPart2) {
        const num = Number(integerPart2)
        integerPart2 = num.toLocaleString('en-US', digits)
    }
    if (decimalPart2 !== undefined) {
        outputValue.value = `${integerPart2}.${decimalPart2.slice(0)}`
    } else {
        outputValue.value = integerPart2
    }
    conversion()
})

convert.addEventListener('change', () => {
    outputValue.value = outputValue.value.replace(/,/g, "")
    inputValue.value = inputValue.value.replace(/,/g, "")
    let [integerPart1, decimalPart1] = inputValue.value.split('.')
    if (integerPart1) {
        const num = Number(integerPart1)
        integerPart1 = num.toLocaleString('en-US', digits)
    }
    if (decimalPart1 !== undefined) {
        inputValue.value = `${integerPart1}.${decimalPart1.slice(0)}`
    } else {
        inputValue.value = integerPart1
    }

    let [integerPart2, decimalPart2] = outputValue.value.split('.')
    if (integerPart2) {
        const num = Number(integerPart2)
        integerPart2 = num.toLocaleString('en-US', digits)
    }
    if (decimalPart2 !== undefined) {
        outputValue.value = `${integerPart2}.${decimalPart2.slice(0)}`
    } else {
        outputValue.value = integerPart2
    }
    conversion()
})

inputValue.addEventListener('input', () => {
    if (inputValue.value === '-' || inputValue.value === "") {
        if (inputValue.value === "") {
            outputValue.value = ""
        }
        return
    }
    if (inputValue.value === "") {
        inputValue.value = "0"
    }
    inputValue.value = inputValue.value.replace(/,/g, "")
    let [integerPart, decimalPart] = inputValue.value.split('.')
    if (integerPart) {
        const num = Number(integerPart)
        integerPart = num.toLocaleString('en-US', digits)
    }
    if (decimalPart !== undefined) {
        inputValue.value = `${integerPart}.${decimalPart.slice(0)}`
    } else {
        inputValue.value = integerPart
    }
    conversion()
})

outputValue.addEventListener('input', () => {
    if (outputValue.value === '-' || outputValue.value === "") {
        if (outputValue.value === "") {
            inputValue.value = ""
        }
        return
    }
    outputValue.value = outputValue.value.replace(/,/g, "")
    let [integerPart, decimalPart] = outputValue.value.split('.')
    if (integerPart) {
        const num = Number(integerPart)
        integerPart = num.toLocaleString('en-US', digits)
    }
    if (decimalPart !== undefined) {
        outputValue.value = `${integerPart}.${decimalPart.slice(0)}`
    } else {
        outputValue.value = integerPart
    }
    conversion1()
})

trigger.addEventListener('click', () => {
    outputValue.value = outputValue.value.replace(/,/g, "")
    inputValue.value = inputValue.value.replace(/,/g, "")
    let [integerPart1, decimalPart1] = inputValue.value.split('.')
    if (integerPart1) {
        const num = Number(integerPart1)
        integerPart1 = num.toLocaleString('en-US', digits)
    }
    if (decimalPart1 !== undefined) {
        inputValue.value = `${integerPart1}.${decimalPart1.slice(0)}`
    } else {
        inputValue.value = integerPart1
    }

    let [integerPart2, decimalPart2] = outputValue.value.split('.')
    if (integerPart2) {
        const num = Number(integerPart2)
        integerPart2 = num.toLocaleString('en-US', digits)
    }
    if (decimalPart2 !== undefined) {
        outputValue.value = `${integerPart2}.${decimalPart2.slice(0)}`
    } else {
        outputValue.value = integerPart2
    }

    let temp = unit.value
    unit.value = convert.value
    convert.value = temp
    conversion()
})

const theme = document.getElementById("theme")
theme.addEventListener('click', () => {
    if (background === false) {
        theme.src = "icon-sun.svg"
        document.body.classList.add('dark')
        background = true
    } else {
        theme.src = 'icon-moon.svg'
        document.body.classList.remove('dark')
        background = false
    }
})