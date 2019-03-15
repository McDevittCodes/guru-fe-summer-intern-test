/**
 * This is the function that should sort, filter, and slice the earthquakes
 * whenever neccessary.  Refer to the README.md for how this should specifically be done.
 *
 * @param {string} filter
 * @param {array} earthquakes
 */

export default function organizeEarthquakes(filter, earthquakes) {
  return earthquakes
    .filter(
      earthquake =>
        earthquake.place.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    )
    .sort((left, right) => {
      if (left.mag !== right.mag) {
        return left.mag < right.mag ? 1 : -1;
      }
      return left.time < right.time ? 1 : -1;
    })
    .slice(0, 20);
}
