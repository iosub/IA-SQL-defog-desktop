from typing import Dict, List
import tiktoken
from datetime import date
import pandas as pd
import base64
import os

# these are needed for the exec_code function
import pandas as pd

from pathlib import Path

home_dir = Path.home()
# see if we have a custom report assets directory
if not os.path.exists(home_dir / "defog_report_assets"):
    # create one
    os.mkdir(home_dir / "defog_report_assets")

analysis_assets_dir = home_dir / "defog_report_assets"
analysis_assets_dir = os.environ.get(
    "REPORT_ASSETS_DIR", analysis_assets_dir.as_posix()
)


def encode_image(image_path):
    """
    Encodes an image to base64.
    """
    image_path = os.path.join(analysis_assets_dir, image_path)
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode("utf-8")


# make sure the query does not contain any malicious commands like drop, delete, etc.
def safe_sql(query):
    if query is None:
        return False

    query = query.lower()
    if (
        "drop" in query
        or "delete" in query
        or "truncate" in query
        or "append" in query
        or "insert" in query
        or "update" in query
        or "create" in query
    ):
        return False

    return True


# resolves an input to a tool
# by replacing global_dict references to the actual variable values
def resolve_input(inp, global_dict):
    # if inp is list, replace each element in the list with call to resolve_input
    if isinstance(inp, list):
        resolved_inputs = []
        for inp in inp:
            resolved_inputs.append(resolve_input(inp, global_dict))

        return resolved_inputs

    elif isinstance(inp, str) and inp.startswith("global_dict."):
        variable_name = inp.split(".")[1]
        print(inp)
        return global_dict.get(variable_name)

    else:
        if isinstance(inp, str):
            # if only numbers, return float
            if inp.isnumeric():
                return float(inp)

            # if None as a string after stripping, return None
            if inp.strip() == "None":
                return None
            return inp

        return inp


async def analyse_data(question: str, data: pd.DataFrame, image_path: str = None):
    """
    Generate a short summary of the results for the given qn. This is a placeholder function as it is not implemented in defog-desktop, and only implemented in defog-self-hosted.
    """
    yield {"success": False, "model_analysis": "NONE"}
    return
