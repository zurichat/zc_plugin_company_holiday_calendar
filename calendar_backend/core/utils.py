import pytz

# Assume the calendar is for Africans only (as it currently has only English language).
TIMEZONE_CONTINENT = ["Africa", "Europe", "Asia", "America"]

DEFAULT_TIMEZONE = "Africa/Lagos"

SYSTEM_TIMEZONE = "Africa/Lagos"


def get_timezones():
    """
    Return timezones.
    """
    return tuple([(x, x) for x in pytz.all_timezones if TIMEZONE_CONTINENT in x])


def normalize_to_utc(time, timezone):
    """
    Convert naive time into given timezone, then UTC
    """
    utct = pytz.timezone(u'UTC')
    tzt = pytz.timezone(timezone)

    return tzt.localize(time).astimezone(utct)
